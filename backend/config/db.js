import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
    
  } catch(error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // process 1 means exit with failure
  }
}