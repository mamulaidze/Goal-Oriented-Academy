import mongoose from "mongoose";
const wordSchema = new mongoose.Schema({
    english: String,
    georgian: String
})
export const Word = mongoose.model('Word', wordSchema, 'words');