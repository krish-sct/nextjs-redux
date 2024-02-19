import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import NewsLetter from "../../../models/NewsLetter";

/**
 * @swagger
 * /api/newsLetters:
 *   get:
 *     summary: Get a list of newsLetters or retrieve a specific newsLetter by ID.
 *     description: |
 *       This endpoint allows you to retrieve a list of newsLetters based on pagination parameters or
 *       retrieve a specific newsLetter by providing its ID.
 *     parameters:
 *       - in: query
 *         name: page
 *         description: The page number for pagination. Default is 1.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         description: The number of newsLetters to return per page. Default is 10.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: id
 *         description: The ID of the newsLetter to retrieve. If provided, other pagination parameters will be ignored.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with newsLetters data or a specific newsLetter.
 *         content:
 *           application/json:
 *             example:
 *               newsLetters: [...]
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
      const newsLetter = await NewsLetter.findById(id);
      return NextResponse.json({ newsLetter }, { status: 200 });
    } else {
      const total = await NewsLetter.countDocuments({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      });
      const totalPages = Math.ceil(total / limit);
      const offset = (page - 1) * limit;
      const newsLetters = await NewsLetter.find({ components: { $ne: [] } })
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit);
      return NextResponse.json(
        { newsLetters, totalPages, currentPage: page },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/newsLetters:
 *   put:
 *     summary: Update an newsLetter
 *     description: Update an newsLetter by ID
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
 *         description: NewsLetter updated successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 otherField1: {....}
 *               message: 'NewsLetter Updated'
 *               status: 200
 *       404:
 *         description: NewsLetter not found
 *         content:
 *           application/json:
 *             example:
 *               message: 'NewsLetter not found'
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
    const res = await NewsLetter.findByIdAndUpdate(
      _id,
      { ...updatedData },
      { new: true }
    );
    if (!res) {
      return NextResponse.json({ message: "NewsLetters not found" });
    }
    return NextResponse.json(
      {
        data: res,
        message: "NewsLetter Updated",
        status: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}
