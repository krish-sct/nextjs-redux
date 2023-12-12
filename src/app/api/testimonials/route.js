import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Testimonial from "../../../models/Testimonial";

export async function GET(req, res) {
  const page = parseInt(req.nextUrl?.searchParams?.get("page")) || 1;
  const limit = parseInt(req.nextUrl?.searchParams?.get("limit")) || 10;
  try {
    await connect();
    const total = await Testimonial.countDocuments(); // Total number of data
    const totalPages = Math.ceil(total / limit); // Calculate total pages
    const offset = (page - 1) * limit;
    const testimonial = await Testimonial.find()
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);
    return NextResponse.json(
      { testimonial, totalPages, currentPage: page },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}
export async function POST(req, res) {
  const body = await req.json();
  const newTestimonial = new Testimonial(body);
  try {
    await connect();
    await newTestimonial.save();
    return NextResponse.json(
      { message: "Testimonial added", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}
