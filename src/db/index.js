import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
   
    console.log(`mongodb connected at `);
  } catch (error) {
    console.log("Connection to db failed");
    process.exit(1);
  }
};

export default connectDB;
