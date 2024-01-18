import mongoose from "mongoose";

const { Schema } = mongoose;

const newsSchema = new Schema({
  components: {
    type: Object,
    default: {},
  },
  staging: {
    type: Object,
    default: {},
  },
});

export default mongoose.models.News || mongoose.model("News", newsSchema);
