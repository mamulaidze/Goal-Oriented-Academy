import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    gmail: String,
    city: String
}, { versionKey: false });


export const User = mongoose.model("Data", userSchema,"users");