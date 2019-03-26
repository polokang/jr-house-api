const User = require("../models/user");
const Service = require("./service");

class UserService extends Service {
    async getOneByEmail(email) {
        return this.Model.findOne({ email });
      }
    async createOne(fields){
      const document=new this.Model(fields);
      await document.hashPassword();
      await document.save();
      return document;
    }
}
module.exports = new UserService(User);
