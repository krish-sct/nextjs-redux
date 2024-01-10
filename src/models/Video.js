import mongoose from "mongoose";

const { Schema } = mongoose;

const videourlSchema = new Schema(
  {
    components: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.models.Video || mongoose.model("Video", videourlSchema);
