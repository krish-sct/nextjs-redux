import NewsLettersConfig from "../../../models/NewsLettersConfig";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/newsLettersConfig:
 *   get:
 *     summary: Get newsLetters configuration
 *     description: Retrieve newsLetters configuration from the database.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               newsLettersConfig: [...]
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
    const newsLettersConfig = await NewsLettersConfig.find();
    return NextResponse.json(newsLettersConfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
