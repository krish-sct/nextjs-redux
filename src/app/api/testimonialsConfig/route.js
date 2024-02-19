import TestimonialsConfig from "../../../models/TestimonialsConfig";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/testimonialsConfig:
 *   get:
 *     summary: Get testimonials configuration
 *     description: Retrieve testimonials configuration from the database.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               testimonialsConfig: [...]
 *       500:
 *         description: Database error
 *         content:
 *           application/json:
 *             example:
 *               error: Database error
 */

export async function GET(req, res) {
  try {
    await connect();
    const testimonialsConfig = await TestimonialsConfig.find();
    return NextResponse.json(testimonialsConfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
