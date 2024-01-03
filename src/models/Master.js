import mongoose from "mongoose";
const { Schema } = mongoose;

const masterSchema = new Schema({
  formData: [
    {
      type: Object,
      default: [],
    },
  ],
});

export default mongoose.models.Master || mongoose.model("Master", masterSchema);
