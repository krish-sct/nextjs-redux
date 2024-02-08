import mongoose from "mongoose";

const { Schema } = mongoose;

const productsConfigSchema = new Schema(
  {
    data: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.models.productsConfigSchema ||
  mongoose.model("ProductsConfig", productsConfigSchema);
