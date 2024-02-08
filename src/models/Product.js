import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  components: {
    type: Object,
    default: {},
  },
  staging: {
    type: Object,
    default: {},
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
