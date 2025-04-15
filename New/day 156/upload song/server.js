import app from "./app.js";
import { connectDB } from "./db/connectDB.js";
const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
    connectDB()
    console.log(`server running: http://localhost:${PORT}`)
})