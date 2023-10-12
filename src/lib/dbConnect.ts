import mongoose from "mongoose";
let alreadyDone = false;

export const connectMongoDB = async () => {
    if (alreadyDone) {
        return;
    }
    try {
        alreadyDone = true;
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB: ', error);
    }
};