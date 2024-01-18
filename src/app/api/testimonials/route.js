import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Testimonial from "../../../models/Testimonial";

export async function GET(req, res) {
  const page = parseInt(req.nextUrl?.searchParams?.get("page")) || 1;
  const limit = parseInt(req.nextUrl?.searchParams?.get("limit")) || 10;
  const id = req.nextUrl?.searchParams?.get("id") || null;

  try {
    await connect();
    if (id) {
      const testimonial = await Testimonial.findById(id);
      return NextResponse.json({ testimonial }, { status: 200 });
    } else {
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
    }
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}

export async function PUT(req, res) {
  const body = await req.json();
  // console.log({ body });
  const { _id, updatedTestimonial } = body;
  try {
    await connect();
    const res = await Testimonial.findByIdAndUpdate(
      _id,
      { ...updatedTestimonial },
      { new: true }
    );
    if (!res) {
      return NextResponse.json({ message: "Testimonial not found" });
    }
    return NextResponse.json(
      {
        testimonial: updatedTestimonial,
        message: "Testimonial Updated",
        status: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}
