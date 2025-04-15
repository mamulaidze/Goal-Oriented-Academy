import mongoose from "mongoose";
const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    filePath: { type: String, required: true }
})
export const Song = mongoose.model("Song", songSchema);
