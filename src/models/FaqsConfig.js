import mongoose from "mongoose";

const { Schema } = mongoose;

const faqsConfigSchema = new Schema(
  {
    data: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.models.FaqsConfig ||
  mongoose.model("FaqsConfig", faqsConfigSchema);
