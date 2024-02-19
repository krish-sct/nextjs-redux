import Video from "../../../models/Video";
import { NextResponse } from "next/server";
import connect from "../../../utils/db";

/**
 * @swagger
 * /api/videos:
 *   get:
 *     summary: Get a list of videos or retrieve a specific video by ID.
 *     description: |
 *       This endpoint allows you to retrieve a list of videos based on pagination parameters or
 *       retrieve a specific video by providing its ID.
 *     parameters:
 *       - in: query
 *         name: page
 *         description: The page number for pagination. Default is 1.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         description: The number of videos to return per page. Default is 10.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: id
 *         description: The ID of the video to retrieve. If provided, other pagination parameters will be ignored.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with videos data or a specific video.
 *         content:
 *           application/json:
 *             example:
 *               videos: [...]
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
      const video = await Video.findById(id);
      return NextResponse.json({ video }, { status: 200 });
    } else {
      const total = await Video.countDocuments({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      });
      const totalPages = Math.ceil(total / limit);
      const offset = (page - 1) * limit;
      const video = await Video.find({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      })
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit);
      return NextResponse.json(
        { video, totalPages, currentPage: page },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/videos:
 *   put:
 *     summary: Update an video
 *     description: Update an video by ID
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
 *         description: Video updated successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 otherField1: {....}
 *               message: 'Video Updated'
 *               status: 200
 *       404:
 *         description: Video not found
 *         content:
 *           application/json:
 *             example:
 *               message: 'Video not found'
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
    const res = await Video.findByIdAndUpdate(
      _id,
      { ...updatedData },
      { new: true }
    );
    if (!res) {
      return NextResponse.json({ message: "video not found" });
    }
    return NextResponse.json(
      { data: res, message: "Video Updated", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}
