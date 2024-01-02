import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import ContactUs from "../../../models/ContactUs";

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
