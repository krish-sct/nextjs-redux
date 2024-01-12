import PressReleasesConfig from "../../../models/PressReleasesConfig";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connect();
    const pressReleasesConfig = await PressReleasesConfig.find();
    return NextResponse.json(pressReleasesConfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
