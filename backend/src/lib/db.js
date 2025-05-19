import mongoose from 'mongoose';
import dotenv from 'dotenv';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB ${conn.connection.host}`);
    } catch (error) {   
        console.log("Failed to connect to MongoDB",error);  
        process.exit(1); //1 thanh cong, 0 that bai
    }
}
