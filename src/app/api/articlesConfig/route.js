import ArticlesConfig from "../../../models/ArticlesConfig";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/articlesConfig:
 *   get:
 *     summary: Get articles configuration
 *     description: Retrieve articles configuration from the database.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               articlesConfig: [...]
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
    const articlesConfig = await ArticlesConfig.find();
    return NextResponse.json(articlesConfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
