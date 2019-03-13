const userService = require("../services/user");

const { formatResponse } = require("../utils/helper");

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

module.exports = {
  addUser
};
