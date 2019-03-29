const userService = require("../services/user");
const User=require("../models/user");
// const { createjwt } = require('../utils/jwt');
const { formatResponse, convertQuery,convertUpdateBody} = require("../utils/helper");

async function addUser(req, res) {
  const { firstName, lastName, fullName, email, phone, password } = req.body;
  const exituser=await userService.getOneByEmail(email);
  if(exituser){
    return formatResponse(res, 'Email already exists', 400);
  }
  const user = await userService.createOne({
    firstName,
    lastName,
    fullName,
    email,
    phone,
    password
  });
  // login 的时候才需要给token 这里不需要
  // const token=createjwt(user._id);
  // return formatResponse(res, { firstName,lastName,fullName,email,phone,password,token }, 201);
  return formatResponse(res, { firstName,lastName,fullName,email,phone,password}, 201);
}


 const getAllusers= async(req,res)=>{
  // const total = await userService.countAll();
  // const { pagination, sort, search } = convertQuery(req.query, total);

  // const user = await userService.getAll(pagination, sort, search);

  // return formatResponse(res, { data: user, pagination });
  const user= await User.find();
  return res.json(user);
}
async function updatephone(req, res) {
  const {email,phone}=req.params;
  const verfy=await User.find({email:email});
  if(verfy.length==0){
    return formatResponse(res, 'user not found', 404);
  }
  const user=await User.updateOne({email:email},{phone:phone});
  return formatResponse(res,"success!");
}
async function deleteUser(req, res) {
  const{email}=req.params;
  const verfy=await User.find({email:email});
  if(verfy.length==0){
    return formatResponse(res, 'user not found', 404);
  }
  const user= await User.remove({email:email});
  return formatResponse(res,"success");
}
module.exports = {
  addUser,
  getAllusers,
  updatephone,
  deleteUser
};
