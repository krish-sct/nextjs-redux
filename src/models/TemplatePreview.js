import mongoose from "mongoose";

const { Schema } = mongoose;

const templatePreviewSchema = new Schema({
  components: {
    type: Object,
    default: {},
  },
});

export default mongoose.models.Template ||
  mongoose.model("Template", templatePreviewSchema);
