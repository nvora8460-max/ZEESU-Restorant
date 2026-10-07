import express from "express";
import cors from "cors";
import {dbConnection} from "./database/dbConnection.js";
import {errorMiddleware} from "./error/error.js";
import reservationRouter from "./routes/reservationRoutes.js";
import env from "./config/config.js";

const app = express();

app.use(cors({
    origin:[env.FRONTEND_URL],
    methods:["POST"],
    credentials: true
})
);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/v1/reservation',reservationRouter)

dbConnection();
app.use(errorMiddleware);


export default app;
