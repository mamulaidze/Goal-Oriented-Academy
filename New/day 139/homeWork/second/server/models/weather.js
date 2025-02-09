import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema({
    city: String,
    temperature: Number,
})

export const Weather = mongoose.model("Weather", weatherSchema, "weather");