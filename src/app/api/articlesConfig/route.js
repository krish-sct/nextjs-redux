import ArticlesConfig from "../../../models/ArticlesConfig";
import connect from "../../../utils/db";
import NextResponse from "next/server";

export async function GET(req, res) {
  try {
    await connect();
    const articlesConfig = await ArticlesConfig.find();
    return NextResponse.json(articlesConfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
