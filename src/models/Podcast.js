import mongoose from "mongoose";

const { Schema } = mongoose;

const podcastSchema = new Schema({
  components: {
    type: Object,
    default: {},
  },
  staging: {
    type: Object,
    default: {},
  },
});

export default mongoose.models.Podcast ||
  mongoose.model("Podcast", podcastSchema);
