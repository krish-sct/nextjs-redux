import mongoose from "mongoose";

const { Schema } = mongoose;

const newsLettersConfigSchema = new Schema(
  {
    data: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.models.NewsLettersConfig ||
  mongoose.model("NewsLettersConfig", newsLettersConfigSchema);
