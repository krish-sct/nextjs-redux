import mongoose from "mongoose";

const { Schema } = mongoose;

const newsLetterSchema = new Schema({
  components: {
    type: Object,
    default: {},
  },
});

export default mongoose.models.NewsLetter ||
  mongoose.model("NewsLetter", newsLetterSchema);
