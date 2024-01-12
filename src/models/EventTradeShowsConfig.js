import mongoose from "mongoose";

const { Schema } = mongoose;

const eventTradeShowsConfig = new Schema(
  {
    data: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.models.EventTradeShowsConfig ||
  mongoose.model("EventTradeShowsConfig", eventTradeShowsConfig);
