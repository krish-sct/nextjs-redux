import VideosConfig from "../../../models/VideosConfig";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/videosConfig:
 *   get:
 *     summary: Get videos configuration
 *     description: Retrieve videos configuration from the database.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               videosConfig: [...]
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
    const videosConfig = await VideosConfig.find();
    console.log(videosConfig);
    return NextResponse.json(videosConfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
