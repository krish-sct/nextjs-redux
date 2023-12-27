import mongoose from "mongoose";

const { Schema } = mongoose;

const faqSchema = new Schema({
  components: {
    type: Object,
    default: {},
  },
});

export default mongoose.models.Faq || mongoose.model("Faq", faqSchema);
