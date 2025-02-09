import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Mogged: ${conn.connection.host}`)
  } catch (err) {
    console.log('Error:', err.message)
  }
}