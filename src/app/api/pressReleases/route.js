import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import PressRelease from "../../../models/PressRelease";

export async function GET(req, res) {
  const page = parseInt(req.nextUrl?.searchParams?.get("page")) || 1;
  const limit = parseInt(req.nextUrl?.searchParams?.get("limit")) || 10;
  const id = req.nextUrl?.searchParams?.get("id") || null;

  try {
    await connect();
    if (id) {
      const pressRelease = await PressRelease.findById(id);
      return NextResponse.json({ pressRelease }, { status: 200 });
    } else {
      const total = await PressRelease.countDocuments();
      const totalPages = Math.ceil(total / limit);
      const offset = (page - 1) * limit;
      const pressReleases = await PressRelease.find()
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit);
      return NextResponse.json(
        { pressReleases, totalPages, currentPage: page },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
