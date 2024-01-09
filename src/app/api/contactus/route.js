import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import ContactUsQuery from "../../../models/ContactUsQuery";

export async function POST(req, res) {
  const body = await req.json();
  const newContactUsQuery = new ContactUsQuery(body);
  try {
    await connect();
    newContactUsQuery.save();
    return NextResponse.json(
      { message: "Form submitted", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
