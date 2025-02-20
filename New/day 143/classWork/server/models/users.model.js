import mongoose from 'mongoose';

const userModel = new mongoose.Schema({
    name:{type:"string",required:true,maxLength: 10, unique: true},
    lastname:{type:"string",required:true,maxLength:15}
})

export const User =  mongoose.model('User',userModel);