import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import ContactUsQuery from "../../../models/ContactUsQuery";

/**
 * @swagger
 * /api/contactus:
 *   get:
 *     summary: Get a list of contactus .
 *     description: |
 *       This endpoint allows you to retrieve a list of contactus based on pagination parameters
 *     parameters:
 *       - in: query
 *         name: page
 *         description: The page number for pagination. Default is 1.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         description: The number of contactus to return per page. Default is 10.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response with contactus data .
 *         content:
 *           application/json:
 *             example:
 *               contactus: [...]
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
    const contactus = await ContactUsQuery.find();
    return NextResponse.json(contactus, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

/**
 * @swagger
 *   /api/contactus:
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
