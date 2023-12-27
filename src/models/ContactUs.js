import mongoose from "mongoose";

const { Schema } = mongoose;

const contactUsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contactNo: {
      type: String,
      minlength: 10,
      maxlength: 10,
    },
    companyName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
    },
    captcha: {
      type: String,
      required: true,
    },
    hearAboutUs: {
      type: String,
      minlength: 10,
      maxlength: 50,
    },
    queries: {
      type: String,
      minlength: 10,
      maxlength: 50,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.ContactUs ||
  mongoose.model("ContactUs", contactUsSchema);
