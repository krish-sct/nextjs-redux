import mongoose from "mongoose";

const { Schema } = mongoose;

const templateSchema = new Schema({
  components: {
    type: Object,
    default: {},
  },
});

export default mongoose.models.Template ||
  mongoose.model("Template", templateSchema);
