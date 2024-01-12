import mongoose from "mongoose";

const { Schema } = mongoose;

const podcastsConfigSchema = new Schema(
  {
    data: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.models.PodcastsConfig ||
  mongoose.model("PodcastsConfig", podcastsConfigSchema);
