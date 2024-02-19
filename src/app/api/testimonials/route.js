import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Testimonial from "../../../models/Testimonial";

/**
 * @swagger
 * /api/testimonials:
 *   get:
 *     summary: Get a list of testimonials or retrieve a specific testimonial by ID.
 *     description: |
 *       This endpoint allows you to retrieve a list of testimonials based on pagination parameters or
 *       retrieve a specific testimonial by providing its ID.
 *     parameters:
 *       - in: query
 *         name: page
 *         description: The page number for pagination. Default is 1.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         description: The number of testimonials to return per page. Default is 10.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: id
 *         description: The ID of the testimonial to retrieve. If provided, other pagination parameters will be ignored.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with testimonials data or a specific testimonial.
 *         content:
 *           application/json:
 *             example:
 *               testimonials: [...]
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
      const testimonial = await Testimonial.findById(id);
      return NextResponse.json({ testimonial }, { status: 200 });
    } else {
      const total = await Testimonial.countDocuments({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      }); // Total number of data
      const totalPages = Math.ceil(total / limit); // Calculate total pages
      const offset = (page - 1) * limit;
      const testimonial = await Testimonial.find({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      })
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit);
      return NextResponse.json(
        { testimonial, totalPages, currentPage: page },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/testimonials:
 *   put:
 *     summary: Update an testimonial
 *     description: Update an testimonial by ID
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
 *         description: Testimonial updated successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 otherField1: {....}
 *               message: 'Testimonial Updated'
 *               status: 200
 *       404:
 *         description: Testimonial not found
 *         content:
 *           application/json:
 *             example:
 *               message: 'Testimonial not found'
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
    const res = await Testimonial.findByIdAndUpdate(
      _id,
      { ...updatedData },
      { new: true }
    );
    if (!res) {
      return NextResponse.json({ message: "Testimonial not found" });
    }
    return NextResponse.json(
      {
        data: res,
        message: "Testimonial Updated",
        status: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}
