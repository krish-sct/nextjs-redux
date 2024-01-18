import mongoose from "mongoose";

const { Schema } = mongoose;

const testimonialSchema = new Schema(
  {
    components: {
      type: Object,
      default: {},
    },
    staging: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", testimonialSchema);
