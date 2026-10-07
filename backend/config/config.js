import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

const env = {
    PORT: process.env.PORT,
    FRONTEND_URL: process.env.FRONTEND_URL,
    MONGO_URL: process.env.MONGO_URL
}

export default env;