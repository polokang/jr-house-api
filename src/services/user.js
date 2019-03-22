const User = require("../models/user");
const Service = require("./service");

class UserService extends Service {
    async getOneByEmail(email) {
        return this.Model.findOne({ email });
      }
}
module.exports = new Service(User);
