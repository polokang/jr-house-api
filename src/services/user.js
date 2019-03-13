const User = require("../models/user");
const Service = require("./service");

class UserService extends Service {}
module.exports = new Service(User);
