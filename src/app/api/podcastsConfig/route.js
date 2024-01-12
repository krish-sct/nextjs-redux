import PodcastsConfig from "../../../models/PodcastsConfig";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connect();
    const podcastsConfig = await PodcastsConfig.find();
    return NextResponse.json(podcastsConfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
