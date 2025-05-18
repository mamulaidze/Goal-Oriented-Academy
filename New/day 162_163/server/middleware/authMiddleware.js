import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req,resizeBy,next)=>{
    let token = req.headers.authorization?.split('')[1]
    if (!token) return resizeBy.status(401).json({message:"არ გაქვთ ufleba"})

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id).select('-password')
        next()
    }catch (error) {
        return resizeBy.status(401).json({message:"არ გაქვთ tokeni"})
    }
}