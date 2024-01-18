import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import News from "../../../models/News";

export async function GET(req, res) {
  const page = parseInt(req.nextUrl?.searchParams?.get("page")) || 1;
  const limit = parseInt(req.nextUrl?.searchParams?.get("limit")) || 10;
  const id = req.nextUrl?.searchParams?.get("id") || null;
  try {
    await connect();
    if (id) {
      const newses = await News.findById(id);
      return NextResponse.json({ newses }, { status: 200 });
    } else {
      const total = await News.countDocuments();
      const totalPages = Math.ceil(total / limit);
      const offset = (page - 1) * limit;
      const news = await News.find()
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit);
      return NextResponse.json(
        { news, totalPages, currentPage: page },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function PUT(req, res) {
  const body = await req.json();
  // console.log({ body });
  const { _id, updatedNewses } = body;
  try {
    await connect();
    const res = await News.findByIdAndUpdate(
      _id,
      { ...updatedNewses },
      { new: true }
    );
    if (!res) {
      return NextResponse.json({ message: "News not found" });
    }
    return NextResponse.json(
      { newses: updatedNewses, message: "News Updated", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}
