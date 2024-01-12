import mongoose from "mongoose";

const { Schema } = mongoose;

const videosConfigSchema = new Schema(
  {
    data: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.models.VideosConfig ||
  mongoose.model("VideosConfig", videosConfigSchema);
