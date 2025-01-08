const express = require('express');
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js';
dotenv.config()

const app = express();

app.get ('/', (req, res) => {
    res.send('Hello, World!')
})
app.listen(process.env.PORT, err=> {
    connectDB()
    console.log('server listening on http://localhost:${process.env.PORT}')
})