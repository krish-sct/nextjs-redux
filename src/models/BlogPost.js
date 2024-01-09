import mongoose from "mongoose";
const { Schema } = mongoose;

const blogPostSchema = new Schema({
  posts: {
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    body: {
      type: String,
    },
  },
});

export default mongoose.models.BlogPost ||
  mongoose.model("BlogPost", blogPostSchema);
