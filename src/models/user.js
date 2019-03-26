const mongoose = require("mongoose");
const Joi = require("joi");
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2
    },
    fullName: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      minlength: 10
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: email => !Joi.validate(email, Joi.string().email()).error,
        msg: "Invalid email format"
      }
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      validate: {
        validator: url => !Joi.validate(url, Joi.string().uri()).error,
        msg: "Invalid url format"
      }
    },
    age: Number,
    gender: String,
    role: ["admin", "owner", "tenant", "guest"],
    __v: { type: Number, select: false },
    createdAt: { type: Date, select: false },
    updatedAt: { type: Date, select: false }
  },
  {
    timestamps: true,
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

userSchema.statics.findByName = async function(key) {
  return this.find({ fullName: { $regex: key || "", $options: "i" } });
};

userSchema.virtual("title").get(function() {
  return this.gender === "male"
    ? "Mr"
    : this.gender === "female"
    ? "Mrs"
    : null;
});

userSchema.methods.hashPassword=async function(){
  this.password=await bcrypt.hash(this.password,10);
}
userSchema.methods.validatePassword=async function(password){
  const validpassword= await bcrypt.compare(password,this.password);
  return validpassword;
}
// userSchema.statics.searchQuery = async function() {
//   return this.find();
// };
const User = mongoose.model("User", userSchema);
module.exports = User;
