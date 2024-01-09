import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import EventTradeShows from "../../../models/EventTradeShows";

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
      const total = await EventTradeShows.countDocuments();
      const totalPages = Math.ceil(total / limit);
      const offset = (page - 1) * limit;
      const eventTradeShows = await EventTradeShows.find()
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
