import User from "../models/users.model.js";
import bcrypt from 'bcryptjs'
import { errorMessage } from "../utils/errorMessage.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {

  try {
    
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    const newUser = new User({
      userName:req.body.userName,
      userEmail:req.body.userEmail,
      password:hash,
    });
    await newUser.save();
    res.status(200).json('User has been created');
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {

  try {
    const user = await User.findOne({userName:req.body.userName})
    if(!user) return next(errorMessage(404, 'User Not found'))

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
    if(!isPasswordCorrect) return next (errorMessage(400, "wrong password or username"))


    const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.JWT_SECRET)

    const {isAdmin, password, ...otherDetail} = user._doc //For remove the password and the admin status in the response
    res.cookie("access_token", token, {
      httpOnly:true,
    }).status(200).json({...otherDetail});
  } catch (error) {
    next(error);
  }
};

