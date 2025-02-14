import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    item: String,
    price: Number,
})

export const Data = mongoose.model("Data", dataSchema, "data");