import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Product from "../../../models/Product";

export async function GET(req, res) {
  const page = parseInt(req.nextUrl?.searchParams?.get("page")) || 1;
  const limit = parseInt(req.nextUrl?.searchParams?.get("limit")) || 10;
  const id = req.nextUrl?.searchParams?.get("id") || null;
  try {
    await connect();
    if (id) {
      const product = await Product.findById(id);
      return NextResponse.json({ product }, { status: 200 });
    } else {
      const total = await Product.countDocuments();

      const totalPages = Math.ceil(total / limit);
      const offset = (page - 1) * limit;
      const products = await Product.find()
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit);

      return NextResponse.json(
        {
          products,
          totalPages,
          currentPage: page,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function POST(req, res) {
  const body = await req.json();
  console.log({ body });
  const newProduct = new Product(body);
  try {
    await connect();
    await newProduct.save();
    return NextResponse.json(
      { message: "Product added", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
