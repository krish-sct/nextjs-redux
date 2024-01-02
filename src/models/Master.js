import mongoose from "mongoose";
const { Schema } = mongoose;

const masterSchema = new Schema({
  components: [
    {
      type: Object,
      default: [],
    },
  ],
});

export default mongoose.models.Master || mongoose.model("Master", masterSchema);
