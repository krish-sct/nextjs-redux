import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import News from "../../../models/News";

/**
 * @swagger
 * /api/news:
 *   get:
 *     summary: Get a list of news or retrieve a specific news by ID.
 *     description: |
 *       This endpoint allows you to retrieve a list of news based on pagination parameters or
 *       retrieve a specific news by providing its ID.
 *     parameters:
 *       - in: query
 *         name: page
 *         description: The page number for pagination. Default is 1.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         description: The number of news to return per page. Default is 10.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: id
 *         description: The ID of the news to retrieve. If provided, other pagination parameters will be ignored.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with news data or a specific news.
 *         content:
 *           application/json:
 *             example:
 *               news: [...]
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
      const newses = await News.findById(id);
      return NextResponse.json({ newses }, { status: 200 });
    } else {
      const total = await News.countDocuments({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      });
      const totalPages = Math.ceil(total / limit);
      const offset = (page - 1) * limit;
      const news = await News.find({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      })
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit);
      return NextResponse.json(
        { news, totalPages, currentPage: page },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/news:
 *   put:
 *     summary: Update an news
 *     description: Update an news by ID
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
 *         description: News updated successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 otherField1: {....}
 *               message: 'News Updated'
 *               status: 200
 *       404:
 *         description: News not found
 *         content:
 *           application/json:
 *             example:
 *               message: 'News not found'
 *       500:
 *         description: Database error
 *         content:
 *           application/json:
 *             example:
 *               error: 'Database error'
 */

export async function PUT(req, res) {
  const body = await req.json();
  // console.log({ body });
  const { _id, updatedData } = body;
  try {
    await connect();
    const res = await News.findByIdAndUpdate(
      _id,
      { ...updatedData },
      { new: true }
    );
    if (!res) {
      return NextResponse.json({ message: "News not found" });
    }
    return NextResponse.json(
      { data: res, message: "News Updated", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}
