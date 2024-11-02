import mongoose from "mongoose";
import "dotenv/config";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.oiiyhkk.mongodb.net/`
    );
    console.log("MongoDb Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
