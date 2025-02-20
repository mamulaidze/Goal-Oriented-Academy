import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
export const connectDB = async() =>{
    try {
        const connn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${connn.connection.host}`)
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`)   
    }
}