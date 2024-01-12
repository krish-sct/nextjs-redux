import mongoose from "mongoose";

const { Schema } = mongoose;

const articlesConfigsSchema = new Schema(
  {
    data: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.models.ArticlesConfig ||
  mongoose.model("ArticlesConfig", articlesConfigsSchema);
