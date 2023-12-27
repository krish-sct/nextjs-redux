import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import ContactUs from "../../../models/ContactUs";

export async function GET(req, res) {
  const page = parseInt(req.nextUrl?.searchParams?.get("page")) || 1;
  const limit = parseInt(req.nextUrl?.searchParams?.get("limit")) || 10;
  try {
    await connect();
    const total = await ContactUs.countDocuments();
    const totalPages = Math.ceil(total / limit);
    const offset = (page - 1) * limit;
    const contactus = await ContactUs.find()
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);
    return NextResponse.json(
      { contactus, totalPages, currentPage: page },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function POST(req, res) {
  const body = await req.json();
  console.log({ body });
  const newContactUs = new ContactUs(body);
  try {
    await connect();
    await newContactUs.save();
    return NextResponse.json(
      { message: "Form submitted", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
