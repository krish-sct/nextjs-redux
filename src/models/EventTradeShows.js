import mongoose from "mongoose";

const { Schema } = mongoose;

const eventTradeShowsSchema = new Schema({
  components: {
    type: Object,
    default: {},
  },
  staging: {
    type: Object,
    default: {},
  },
});

export default mongoose.models.EventTradeShow ||
  mongoose.model("EventTradeShow", eventTradeShowsSchema);
