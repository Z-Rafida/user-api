import mongoose from "mongoose";
import 'dotenv/config';

const databaseLink = process.env.MONGO_URL;


export const databaseConnection = () => {
    mongoose.connect(databaseLink).then(() => {
        console.log('Database connected')
    });
};