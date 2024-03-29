import mongoose from "mongoose";

const { Schema } = mongoose;

const articlesConfigSchema = new Schema(
  {
    data: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.models.ArticlesConfig ||
  mongoose.model("ArticlesConfig", articlesConfigSchema);
