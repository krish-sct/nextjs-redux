import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import EventTradeShows from "../../../models/EventTradeShows";

/**
 * @swagger
 * /api/eventTradeShows:
 *   get:
 *     summary: Get a list of eventTradeShows or retrieve a specific eventTradeShow by ID.
 *     description: |
 *       This endpoint allows you to retrieve a list of eventTradeShows based on pagination parameters or
 *       retrieve a specific eventTradeShow by providing its ID.
 *     parameters:
 *       - in: query
 *         name: page
 *         description: The page number for pagination. Default is 1.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         description: The number of eventTradeShows to return per page. Default is 10.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: id
 *         description: The ID of the eventTradeShow to retrieve. If provided, other pagination parameters will be ignored.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with eventTradeShows data or a specific eventTradeShow.
 *         content:
 *           application/json:
 *             example:
 *               eventTradeShows: [...]
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
      const eventTradeShow = await EventTradeShows.findById(id);
      return NextResponse.json({ eventTradeShow }, { status: 200 });
    } else {
      const total = await EventTradeShows.countDocuments({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      });
      const totalPages = Math.ceil(total / limit);
      const offset = (page - 1) * limit;
      const eventTradeShows = await EventTradeShows.find({
        components: { $ne: [] },
        "staging.isSEOVerified": true,
      })
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit);
      return NextResponse.json(
        { eventTradeShows, totalPages, currentPage: page },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/eventTradeShows:
 *   put:
 *     summary: Update an eventTradeShow
 *     description: Update an eventTradeShow by ID
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
 *         description: EventTradeShow updated successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 otherField1: {....}
 *               message: 'EventTradeShow Updated'
 *               status: 200
 *       404:
 *         description: EventTradeShow not found
 *         content:
 *           application/json:
 *             example:
 *               message: 'EventTradeShow not found'
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
    const result = await EventTradeShows.findByIdAndUpdate(
      _id,
      { ...updatedData },
      { new: true }
    );
    if (!result) {
      return NextResponse.json({ message: "EventTradeShows not found" });
    }
    return NextResponse.json(
      { data: result, message: "EventTradeShows Updated", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}
