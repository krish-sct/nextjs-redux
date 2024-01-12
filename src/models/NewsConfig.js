import mongoose from "mongoose";

const { Schema } = mongoose;

const newsConfigSchema = new Schema(
  {
    data: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.models.NewsConfig ||
  mongoose.model("NewsConfig", newsConfigSchema);
