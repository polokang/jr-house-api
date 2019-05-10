const userService = require("../services/user")
const { formatResponse } = require("../utils/helper")
const { generateToken } = require("../utils/jwt")

async function addUser(req, res) {
  const { email, password, name } = req.body.user
  const existingUser = await userService.getOneByField({ email })
  if (existingUser) {
    return formatResponse(res, "Email already exists", 400)
  }
  const user = await userService.createOne({
    email,
    password,
    name
  })
  const token = generateToken(user._id)
  return formatResponse(res, { email, name, token }, 201)
}

async function getSelf(req, res) {
  const user = await userService.getOne(req.user.id)
  return formatResponse(res, user)
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
  getSelf
}
