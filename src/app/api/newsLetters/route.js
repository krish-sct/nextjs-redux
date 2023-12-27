import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import NewsLetter from "../../../models/NewsLetter";

export async function GET(req, res) {
  const page = parseInt(req.nextUrl?.searchParams?.get("page")) || 1;
  const limit = parseInt(req.nextUrl?.searchParams?.get("limit")) || 10;
  try {
    await connect();
    const total = await NewsLetter.countDocuments();
    const totalPages = Math.ceil(total / limit);
    const offset = (page - 1) * limit;
    const newsLetter = await NewsLetter.find()
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);
    return NextResponse.json(
      { newsLetter, totalPages, currentPage: page },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
