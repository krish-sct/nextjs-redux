import mongoose from "mongoose";

const { Schema } = mongoose;

const testimonialsConfigSchema = new Schema(
  {
    data: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.models.TestimonialsConfig ||
  mongoose.model("TestimonialsConfig", testimonialsConfigSchema);
