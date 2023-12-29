import mongoose from "mongoose";
const { Schema } = mongoose;

const masterformSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
  className: String,
});

const masterSchema = new Schema({
  contactUsForm: [masterformSchema],
});

export default mongoose.models.MasterForm ||
  mongoose.model("MasterForm", masterSchema);
