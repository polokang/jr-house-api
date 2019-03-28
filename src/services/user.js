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
    async verifyUserPassword(email,password){
       const user=await this.Model.findOne({email});
       console.log(user.firstName);
       const verify= await user.validatePassword(password);
       if(verify===true){
         return user;
       }else{
         return null;
       }
       
    }
}
module.exports = new UserService(User);
