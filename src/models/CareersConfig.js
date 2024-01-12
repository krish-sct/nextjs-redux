import mongoose from "mongoose";
const { Schema } = mongoose;

const careersConfigSchema = new Schema(
  {
    data: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.models.CareersConfig ||
  mongoose.model("CareersConfig", careersConfigSchema);
