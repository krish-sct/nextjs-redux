import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import PressRelease from "../../../models/PressRelease";

/**
 * @swagger
 * /api/pressReleases:
 *   get:
 *     summary: Get a list of pressReleases or retrieve a specific pressRelease by ID.
 *     description: |
 *       This endpoint allows you to retrieve a list of pressReleases based on pagination parameters or
 *       retrieve a specific pressRelease by providing its ID.
 *     parameters:
 *       - in: query
 *         name: page
 *         description: The page number for pagination. Default is 1.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         description: The number of pressReleases to return per page. Default is 10.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: id
 *         description: The ID of the pressRelease to retrieve. If provided, other pagination parameters will be ignored.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with pressReleases data or a specific pressRelease.
 *         content:
 *           application/json:
 *             example:
 *               pressReleases: [...]
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
      const pressRelease = await PressRelease.findById(id);
      return NextResponse.json({ pressRelease }, { status: 200 });
    } else {
      const total = await PressRelease.countDocuments({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      });
      const totalPages = Math.ceil(total / limit);
      const offset = (page - 1) * limit;
      const pressReleases = await PressRelease.find({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      })
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit);
      return NextResponse.json(
        { pressReleases, totalPages, currentPage: page },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/pressReleases:
 *   put:
 *     summary: Update an pressRelease
 *     description: Update an pressRelease by ID
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
 *         description: PressRelease updated successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 otherField1: {....}
 *               message: 'PressRelease Updated'
 *               status: 200
 *       404:
 *         description: PressRelease not found
 *         content:
 *           application/json:
 *             example:
 *               message: 'PressRelease not found'
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
    const res = await PressRelease.findByIdAndUpdate(
      _id,
      { ...updatedData },
      { new: true }
    );
    if (!res) {
      return NextResponse.json({ message: "PressRelease not found" });
    }
    return NextResponse.json(
      {
        data: res,
        message: "PressRelease Updated",
        status: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}
