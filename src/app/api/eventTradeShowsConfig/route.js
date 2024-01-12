import EventTradeShowsConfig from "../../../models/EventTradeShowsConfig";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connect();
    const eventTradeShowsconfig = await EventTradeShowsConfig.find();
    return NextResponse.json(eventTradeShowsconfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
