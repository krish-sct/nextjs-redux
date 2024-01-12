import NewsLettersConfig from "../../../models/NewsLettersConfig";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connect();
    const newsLettersConfig = await NewsLettersConfig.find();
    return NextResponse.json(newsLettersConfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
