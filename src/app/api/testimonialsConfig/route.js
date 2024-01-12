import TestimonialsConfig from "../../../models/TestimonialsConfig";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connect();
    const testimonialsConfig = await TestimonialsConfig.find();
    return NextResponse.json(testimonialsConfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
