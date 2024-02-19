import PressReleasesConfig from "../../../models/PressReleasesConfig";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/pressReleasesConfig:
 *   get:
 *     summary: Get pressReleases configuration
 *     description: Retrieve pressReleases configuration from the database.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               pressReleasesConfig: [...]
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
    const pressReleasesConfig = await PressReleasesConfig.find();
    return NextResponse.json(pressReleasesConfig, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
