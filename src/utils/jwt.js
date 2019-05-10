const jwt = require("jsonwebtoken")

const generateToken = id => {
  const token = jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: "15m" })
  return token
}

module.exports = { generateToken }
