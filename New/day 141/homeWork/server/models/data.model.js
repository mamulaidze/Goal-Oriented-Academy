import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    name:{type:"string",required:"true",unique:"true"},
    surname: String,
})

export const Data = mongoose.model("Data", dataSchema, "data");