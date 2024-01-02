import mongoose from "mongoose";

const { Schema } = mongoose;

const contactUsSchema = new Schema({
  formData: {
    type: Object,
    default: {},
  },
});

export default mongoose.models.ContactUs ||
  mongoose.model("ContactUs", contactUsSchema);
