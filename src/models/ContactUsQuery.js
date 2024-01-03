import mongoose from "mongoose";

const { Schema } = mongoose;

const contactUsQuerySchema = new Schema({
  formData: {
    type: Object,
    default: {},
  },
});

export default mongoose.models.ContactUsQuery ||
  mongoose.model("ContactUsQuery", contactUsQuerySchema);
