import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Podcast from "../../../models/Podcast";

export async function GET(req, res) {
  const page = parseInt(req.nextUrl?.searchParams?.get("page")) || 1;
  const limit = parseInt(req.nextUrl?.searchParams?.get("limit")) || 10;
  const id = req.nextUrl?.searchParams?.get("id") || null;

  try {
    await connect();
    if (id) {
      const podcast = await Podcast.findById(id);
      return NextResponse.json({ podcast }, { status: 200 });
    } else {
      const total = await Podcast.countDocuments();
      const totalPages = Math.ceil(total / limit);
      const offset = (page - 1) * limit;
      const podcasts = await Podcast.find()
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit);
      return NextResponse.json(
        { podcasts, totalPages, currentPage: page },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
