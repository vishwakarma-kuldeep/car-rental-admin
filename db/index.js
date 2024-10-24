import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
    path: './.env'
})
// import { DB_NAME } from "../constants.js";

const DB_URI =  process.env.MONGO_URL
// console.log(DB_URI)
// console.log("==========================================  DB_URI  ==========================================")
//   console.log(process.env)
// console.log("===============================================================================================")

const connectDB = async () => {
    try {
        console.log("DB URI: ", DB_URI)
        console.log("Connecting to MongoDB ...")
        const connectionInstance = await mongoose.connect(DB_URI)
       
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export  {connectDB}