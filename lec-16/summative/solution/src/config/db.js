import mongoose from "mongoose";

const connectToDb = async () => {
  console.log("db connecting...");
  try {
    const res = await mongoose.connect(process.env.URI);
    if (res) {
      console.log("db connected");
    }
  } catch (error) {
    console.log(`connection failed with error ${error}`);
  }
};

export default connectToDb;
