import mongoose from "mongoose";
import env from "../config/config.js";

export const dbConnection = async () => {
    mongoose.connect(env.MONGO_URL, {
        dbName: "RESTAURANT"
    }).then(() => {
        console.log("connected to db successfully");
    }).catch((err) => {
        console.log("Error", err.message);
        process.exit(1);
    });
    
};