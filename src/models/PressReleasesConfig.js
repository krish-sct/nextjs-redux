import mongoose from "mongoose";

const { Schema } = mongoose;

const pressReleasesConfigSchema = new Schema(
  {
    data: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.models.PressReleasesConfig ||
  mongoose.model("PressReleasesConfig", pressReleasesConfigSchema);
