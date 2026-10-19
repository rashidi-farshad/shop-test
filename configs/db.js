import mongoose from "mongoose";
import "dotenv/config";
const conecctDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("connect to db");
};
export default conecctDB;
