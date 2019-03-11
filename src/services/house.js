const House = require("../models/house");
const Service = require("./service");

class HouseService extends Service {}
module.exports = new HouseService(House);
