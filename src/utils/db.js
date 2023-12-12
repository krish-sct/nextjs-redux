import mongoose from "mongoose";
import configs from "./configs";

const connect = async () => {
  try {
    await mongoose.connect(configs.mongoURL);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
