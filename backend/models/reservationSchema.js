import mongoose from "mongoose";
import validator from "validator";
const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "firstName is Required"],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "lastName is Required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        trim: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    phone: {
        type: String,
        required: [true, "Phone number is Required"],
        trim: true
    },
    date: {
        type: String,
        required: [true, "Date is Required"],
        trim: true
    },
    time: {
        type: String,
        required: [true, "Time is Required"],
        trim: true
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);

   