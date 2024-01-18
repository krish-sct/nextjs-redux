import mongoose from "mongoose";

const { Schema } = mongoose;

const pressReleaseSchema = new Schema({
  components: {
    type: Object,
    default: {},
  },
  staging: {
    type: Object,
    default: {},
  },
});

export default mongoose.models.PressRelease ||
  mongoose.model("PressRelease", pressReleaseSchema);
