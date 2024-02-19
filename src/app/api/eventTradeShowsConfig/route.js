import EventTradeShowsConfig from "../../../models/EventTradeShowsConfig";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/eventTradeShowsConfig:
 *   get:
 *     summary: Get eventTradeShows configuration
 *     description: Retrieve eventTradeShows configuration from the database.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               eventTradeShowsConfig: [...]
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
    const eventTradeShowsconfig = await EventTradeShowsConfig.find();
    return NextResponse.json(eventTradeShowsconfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
