import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Career from "../../../models/Career";
/**
 * @swagger
 * /api/careers:
 *   get:
 *     summary: Get a list of careers or retrieve a specific career by ID.
 *     description: |
 *       This endpoint allows you to retrieve a list of careers based on pagination parameters or
 *       retrieve a specific career by providing its ID.
 *     parameters:
 *       - in: query
 *         name: page
 *         description: The page number for pagination. Default is 1.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         description: The number of careers to return per page. Default is 10.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: id
 *         description: The ID of the career to retrieve. If provided, other pagination parameters will be ignored.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with careers data or a specific career.
 *         content:
 *           application/json:
 *             example:
 *               careers: [...]
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
      const career = await Career.findById(id);
      return NextResponse.json({ career }, { status: 200 });
    } else {
      const total = await Career.countDocuments({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      });
      const totalPages = Math.ceil(total / limit);
      const offset = (page - 1) * limit;
      const careers = await Career.find({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      })
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit);
      return NextResponse.json(
        { careers, totalPages, currentPage: page },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/careers:
 *   put:
 *     summary: Update a career
 *     description: Update a career by ID
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
 *         description: Career updated successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 otherField1: {....}
 *               message: 'Career Updated'
 *               status: 200
 *       404:
 *         description: Career not found
 *         content:
 *           application/json:
 *             example:
 *               message: 'Career not found'
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
    const result = await Career.findByIdAndUpdate(
      _id,
      { ...updatedData },
      { new: true }
    );
    if (!result) {
      return NextResponse.json({ message: "Career not found" });
    }
    return NextResponse.json(
      { data: result, message: "Career Updated", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}
