import FaqsConfig from "../../../models/FaqsConfig";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connect();
    const faqsconfig = await FaqsConfig.find();
    return NextResponse.json(faqsconfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
