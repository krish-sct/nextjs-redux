import mongoose from "mongoose";

const { Schema } = mongoose;

const contactUsSchema = new Schema(
  {
    formData: mongoose.Schema.Types.Mixed,
  },
  { strict: false }
);

export default mongoose.models.ContactUs ||
  mongoose.model("ContactUs", contactUsSchema);
