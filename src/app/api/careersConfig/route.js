import CareersConfig from "../../../models/CareersConfig";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/careersConfig:
 *   get:
 *     summary: Get careers configuration
 *     description: Retrieve careers configuration from the database.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               careersConfig: [...]
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
    const careersConfig = await CareersConfig.find();
    return NextResponse.json(careersConfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
