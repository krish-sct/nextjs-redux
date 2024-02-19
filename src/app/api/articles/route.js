import { NextRequest, NextResponse } from "next/server";
import connect from "../../../utils/db";
import Article from "../../../models/Article";

/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Get a list of articles or retrieve a specific article by ID.
 *     description: |
 *       This endpoint allows you to retrieve a list of articles based on pagination parameters or
 *       retrieve a specific article by providing its ID.
 *     parameters:
 *       - in: query
 *         name: page
 *         description: The page number for pagination. Default is 1.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         description: The number of articles to return per page. Default is 10.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: id
 *         description: The ID of the article to retrieve. If provided, other pagination parameters will be ignored.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with articles data or a specific article.
 *         content:
 *           application/json:
 *             example:
 *               articles: [...]
 *               totalPages: 5
 *               currentPage: 1
 *       500:
 *         description: Internal server error. Indicates a database error.
 *         content:
 *           application/json:
 *             example:
 *               error: Database error
 */

export async function GET(req, res) {
  const page = parseInt(req.nextUrl?.searchParams?.get("page")) || 1;
  const limit = parseInt(req.nextUrl?.searchParams?.get("limit")) || 10;
  const id = req.nextUrl?.searchParams?.get("id") || null;
  try {
    await connect();
    if (id) {
      const article = await Article.findById(id);
      return NextResponse.json({ article }, { status: 200 });
    } else {
      const total = await Article.countDocuments({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      });
      const totalPages = Math.ceil(total / limit);
      const offset = (page - 1) * limit;
      const articles = await Article.find({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      })
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit);
      return NextResponse.json(
        { articles, totalPages, currentPage: page },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/articles:
 *   put:
 *     summary: Update an article
 *     description: Update an article by ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *               updatedData:
 *                 type: object
 *     responses:
 *       200:
 *         description: Article updated successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 otherField1: {....}
 *               message: 'Article Updated'
 *               status: 200
 *       404:
 *         description: Article not found
 *         content:
 *           application/json:
 *             example:
 *               message: 'Article not found'
 *       500:
 *         description: Database error
 *         content:
 *           application/json:
 *             example:
 *               error: 'Database error'
 */

export async function PUT(req, res) {
  const body = await req.json();

  const { _id, updatedData } = body;
  try {
    await connect();
    const updatedArticle = await Article.findByIdAndUpdate(
      _id,
      {
        ...updatedData,
      },
      { new: true }
    );
    if (!updatedArticle) {
      return NextResponse.json({ message: "Article not found" });
    }
    return NextResponse.json(
      { data: updatedArticle, message: "Article Updated", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
