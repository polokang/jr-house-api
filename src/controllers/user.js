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

module.exports = {
  addUser,
  getSelf
}
