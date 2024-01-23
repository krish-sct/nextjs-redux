import Video from "../../../models/Video";
import { NextResponse } from "next/server";
import connect from "../../../utils/db";

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
      const video = await Video.find({ components: { $ne: [] } })
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
