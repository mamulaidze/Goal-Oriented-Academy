import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    item: String,
    age: Number
},{ versionKey: false })

export const Data = mongoose.model("Data", dataSchema,"data");