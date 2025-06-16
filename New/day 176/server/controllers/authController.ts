import {Request, Response} from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'testsecret';
export const registerUser = async(req: Request, res:Response)=>{
    const {username, email,password} = req.body;
    try{
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message: 'User already exists'});
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({username,email,password: hashedPassword});
        await newUser.save();
        res.status(201).json({message: 'User registered warmatebuleish successfully'});
    }catch(err){
        res.status(500).json({message: 'Server error', error: err});
    }

}

export const loginUser = async(req: Request, res: Response)=>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message: 'User not povnailable'});
        } 
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({message: 'paroli arasworiad'});
        }
        const token = jwt.sign({id: user._id},JWT_SECRET, {expiresIn: '1h'});
        res.json({ token, user: { id: user._id, username: user.username, email: user.email } });

    }catch (error) {
        res.status(500).json({ msg: 'შეცდომა სერვერზე' });
    }
}