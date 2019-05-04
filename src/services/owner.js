const Owner = require("../models/owner")
const Service = require("./service")

class OwnerService extends Service {}
module.exports = new OwnerService(Owner)
