import User from '../models/User.js';
import {generateToken} from '../utils/generateToken.js';

export const register = async(req,res)=> {
    const {username,password}= req.body;
    const userExists = await useEffect.findOne({username});
    if(userExists) return res.status(400).json({message:"უკვე დარეგისტრირებულია"})
}

export const login = async(req,res)=>{
    const {username,password} = req.body;
    const user = await User.findOne({username})
    if (user && (await user.matchPassword(password))){
        res.json({token: generateToken(user._id)})
    }else{
        res.status(401).json({message:"მონაცემები არასწორია"})
    }
}