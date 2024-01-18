import mongoose from "mongoose";

const { Schema } = mongoose;

const careerSchema = new Schema({
  components: {
    type: Object,
    default: {},
  },
  staging: {
    type: Object,
    default: {},
  },
});

export default mongoose.models.Career || mongoose.model("Career", careerSchema);
