import mongoose from "mongoose";

const { Schema } = mongoose;

const articleSchema = new Schema({
  components: {
    type: Object,
    default: {},
  },
});

export default mongoose.models.Article ||
  mongoose.model("Article", articleSchema);
