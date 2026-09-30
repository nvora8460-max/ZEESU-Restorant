import mongoose from "mongoose";

export const dbConnection = async () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "RESTAURANT"
    }).then(() => {
        console.log("connected to db successfully");
    }).catch((err) => {
        console.log("Error", err.message);
        process.exit(1);
    });
    
};