import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Faq from "../../../models/Faq";

/**
 * @swagger
 * /api/faqs:
 *   get:
 *     summary: Get a list of faqs or retrieve a specific faq by ID.
 *     description: |
 *       This endpoint allows you to retrieve a list of faqs based on pagination parameters or
 *       retrieve a specific faq by providing its ID.
 *     parameters:
 *       - in: query
 *         name: page
 *         description: The page number for pagination. Default is 1.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         description: The number of faqs to return per page. Default is 10.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: id
 *         description: The ID of the faq to retrieve. If provided, other pagination parameters will be ignored.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with faqs data or a specific faq.
 *         content:
 *           application/json:
 *             example:
 *               faqs: [...]
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
      const faq = await Faq.findById(id);
      return NextResponse.json({ faq }, { status: 200 });
    } else {
      const total = await Faq.countDocuments({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      });
      const totalPages = Math.ceil(total / limit);
      const offset = (page - 1) * limit;
      const faqs = await Faq.find({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      })
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit);
      return NextResponse.json(
        { faqs, totalPages, currentPage: page },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/faqs:
 *   put:
 *     summary: Update an faq
 *     description: Update an faq by ID
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
 *         description: Faq updated successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 otherField1: {....}
 *               message: 'Faq Updated'
 *               status: 200
 *       404:
 *         description: Faq not found
 *         content:
 *           application/json:
 *             example:
 *               message: 'Faq not found'
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
    const res = await Faq.findByIdAndUpdate(
      _id,
      { ...updatedData },
      { new: true }
    );
    if (!res) {
      return NextResponse.json({ message: "Faqs not found" });
    }
    return NextResponse.json(
      { data: res, message: "Faq Updated", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}
