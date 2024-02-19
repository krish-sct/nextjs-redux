import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Product from "../../../models/Product";

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get a list of products or retrieve a specific product by ID.
 *     description: |
 *       This endpoint allows you to retrieve a list of products based on pagination parameters or
 *       retrieve a specific product by providing its ID.
 *     parameters:
 *       - in: query
 *         name: page
 *         description: The page number for pagination. Default is 1.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         description: The number of products to return per page. Default is 10.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: id
 *         description: The ID of the product to retrieve. If provided, other pagination parameters will be ignored.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with products data or a specific product.
 *         content:
 *           application/json:
 *             example:
 *               products: [...]
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
  const page = parseInt(req.nextUrl?.searchParams?.get("page")) || 1;
  const limit = parseInt(req.nextUrl?.searchParams?.get("limit")) || 10;
  const id = req.nextUrl?.searchParams?.get("id") || null;
  try {
    await connect();
    if (id) {
      const product = await Product.findById(id);
      return NextResponse.json({ product }, { status: 200 });
    } else {
      const total = await Product.countDocuments();

      const totalPages = Math.ceil(total / limit);
      const offset = (page - 1) * limit;
      const products = await Product.find()
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit);

      return NextResponse.json(
        {
          products,
          totalPages,
          currentPage: page,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/products:
 *   put:
 *     summary: Update an product
 *     description: Update an product by ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *               updatedData:
 *                 type: object
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 otherField1: {....}
 *               message: 'Product Updated'
 *               status: 200
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             example:
 *               message: 'Product not found'
 *       500:
 *         description: Database error
 *         content:
 *           application/json:
 *             example:
 *               error: 'Database error'
 */

export async function POST(req, res) {
  const body = await req.json();
  console.log({ body });
  const newProduct = new Product(body);
  try {
    await connect();
    await newProduct.save();
    return NextResponse.json(
      { message: "Product added", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
