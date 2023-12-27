import mongoose from "mongoose";

const { Schema } = mongoose;

const testimonialSchema = new Schema(
  {
    description: {
      type: String,
    },
    person: {
      type: String,
    },
    company: {
      type: String,
    },
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", testimonialSchema);
