import CareersConfig from "../../../models/CareersConfig";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connect();
    const careersConfig = await CareersConfig.find();
    return NextResponse.json(careersConfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
