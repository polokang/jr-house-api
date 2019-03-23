const userService = require("../services/user");
const User=require("../models/user");

const { formatResponse, convertQuery,convertUpdateBody} = require("../utils/helper");

async function addUser(req, res) {
  const { firstName, lastName, fullName, email, phone, password } = req.body;
  const user = await userService.createOne({
    firstName,
    lastName,
    fullName,
    email,
    phone,
    password
  });
  return formatResponse(res, user, 201);
}


 const getAllusers= async(req,res)=>{
  // const total = await userService.countAll();
  // const { pagination, sort, search } = convertQuery(req.query, total);

  // const user = await userService.getAll(pagination, sort, search);

  // return formatResponse(res, { data: user, pagination });
  const user= await User.find();
  return res.json(user);
}
async function updateUser(req, res) {
  const {id} = req.params;
  const keys = ['phone', 'email'];
  const user = await userService.updateOne(
    id,
    convertUpdateBody(req.body, keys)
  );
  if (!user) {
    return formatResponse(res, 'Course not found', 404);
  }

  return formatResponse(res, user);
}
async function deleteUser(req, res) {
  const { id } = req.params;
  const user = await userService.deleteOne(id);
  if (!user) {
    return formatResponse(res, 'Course not found', 404);
  }
  return formatResponse(res, user);
}
module.exports = {
  addUser,
  getAllusers,
  updateUser,
  deleteUser
};
