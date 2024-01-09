import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Article from "../../../models/Article";

export async function GET(req, res) {
  const page = parseInt(req.nextUrl?.searchParams?.get("page")) || 1;
  const limit = parseInt(req.nextUrl?.searchParams?.get("limit")) || 10;
  try {
    await connect();
    const total = await Article.countDocuments();
    const totalPages = Math.ceil(total / limit);
    const offset = (page - 1) * limit;
    const articles = await Article.find()
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);
    return NextResponse.json(
      { articles, totalPages, currentPage: page },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function GETById(req, { params }) {
  const { id } = params;
  try {
    await connect();
    const article = await Article.findOne({ _id: id });

    if (!article) {
      return NextResponse.json({ error: "Article not found" });
    }

    return NextResponse.json({ article });
  } catch (error) {
    console.error("Error fetching article:", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
