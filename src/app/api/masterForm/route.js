import MasterForm from "../../../models/MasterForm";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const page = parseInt(req.nextUrl?.searchParams?.get("page")) || 1;
  const limit = parseInt(req.nextUrl?.searchParams?.get("limit")) || 10;
  try {
    await connect();
    const total = await MasterForm.countDocuments();
    const totalPages = Math.ceil(total / limit);
    const offset = (page - 1) * limit;
    const masterForm = await MasterForm.find()
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);

    // console.log("Debugging Info:", {
    //   page,
    //   limit,
    //   total,
    //   totalPages,
    //   offset,
    //   masterForm,
    // });

    return NextResponse.json(
      {
        masterForm,
        totalPages,
        currentPage: page,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
