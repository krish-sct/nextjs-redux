import VideosConfig from "../../../models/VideosConfig";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connect();
    const videosConfig = await VideosConfig.find();
    console.log(videosConfig);
    return NextResponse.json(videosConfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
