import Master from "../../../models/Master";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/master:
 *   get:
 *     summary: Get a list of master data.
 *     description: |
 *       This endpoint allows you to retrieve a list of master data based on pagination parameters.
 *     parameters:
 *       - in: query
 *         name: page
 *         description: The page number for pagination. Default is 1.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         description: The number of master  data to return per page. Default is 10.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response with master data .
 *         content:
 *           application/json:
 *             example:
 *               master: [...]
 *               totalPages: 5
 *               currentPage: 1
 *       500:
 *         description: Internal server error. Indicates a database error.
 *         content:
 *           application/json:
 *             example:
 *               error: Database error
 */
export async function GET(req, res) {
  try {
    await connect();
    const master = await Master.find();
    return NextResponse.json(master, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

/**
 * @swagger
 *   /api/master:
 *   post:
 *     summary: Submit a form
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *     responses:
 *       '200':
 *         description: Form submitted
 *       '500':
 *         description: Database error
 */
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
