const userserveice = require("../services/user");
const User = require("../models/user");
const {formatResponse}=require("../utils/helper");
const { createjwt } = require('../utils/jwt');
module.exports={
    login: async(req,res)=>{
        const {email,password}=req.body;
        const user=await userserveice.verifyUserPassword(email,password);
        if(!user){
            return formatResponse(res,"invalid email or password",401);
        }
        const token =createjwt(user._id);
         await User.updateOne(
            {email:email},
            {$set:{token:token}}
            );
        return formatResponse(res, { name: user.fullName, token });   
       
    }
}