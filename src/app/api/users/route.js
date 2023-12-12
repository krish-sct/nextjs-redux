import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import User from "../../../models/User";

export async function GET(req, res) {
  const page = parseInt(req.nextUrl?.searchParams?.get("page")) || 1;
  const limit = parseInt(req.nextUrl?.searchParams?.get("limit")) || 10;
  //console.log({ page, limit });
  try {
    await connect();
    const total = await User.countDocuments(); // Total number of data
    const totalPages = Math.ceil(total / limit); // Calculate total pages
    const offset = (page - 1) * limit;
    const users = await User.find()
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);
    return NextResponse.json(
      { users, totalPages, currentPage: page },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}
export async function POST(req, res) {
  const body = await req.json();
  //console.log({ body });
  const newUser = new User(body);
  try {
    await connect();
    await newUser.save();
    return NextResponse.json({ message: "User added" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database" }, { status: 500 });
  }
}
