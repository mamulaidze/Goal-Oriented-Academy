import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mpuah connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("holy shit we are stuck");
        console.error(error);
    }
};
