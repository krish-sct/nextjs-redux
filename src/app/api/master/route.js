import Master from "../../../models/Master";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connect();
    const master = await Master.find();
    return NextResponse.json(master, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function POST(req, res) {
  const body = await req.json();
  console.log({ body });
  const newMaster = new Master(body);
  try {
    await connect();
    await newMaster.save();
    return NextResponse.json(
      { message: "Form submitted", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
