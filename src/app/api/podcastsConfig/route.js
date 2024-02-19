import PodcastsConfig from "../../../models/PodcastsConfig";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/podcastsConfig:
 *   get:
 *     summary: Get podcasts configuration
 *     description: Retrieve podcasts configuration from the database.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               podcastsConfig: [...]
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
    const podcastsConfig = await PodcastsConfig.find();
    return NextResponse.json(podcastsConfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
