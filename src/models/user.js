const mongoose = require("mongoose")
const Joi = require("joi")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
      minlength: 2
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      //cannot validate the unique here, it will break the update function.
      validate: {
        validator: email => !Joi.validate(email, Joi.string().email()).error,
        msg: "Invalid email format"
      }
    },
    password: {
      type: String,
      required: true
      // validate: {
      //   validator: password =>
      //     !Joi.validate(password, Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/))
      //       .error,
      //   msg: "Invalid password format"
      // }
    },
    __v: { type: Number, select: false },
    createdAt: { type: Date, select: false },
    updatedAt: { type: Date, select: false }
  },
  {
    timestamps: true
  }
)

// userSchema.statics.findByName = async function(key) {
//   return this.find({ fullName: { $regex: key || "", $options: "i" } });
// };

// userSchema.virtual("title").get(function() {
//   return this.gender === "male"
//     ? "Mr"
//     : this.gender === "female"
//     ? "Mrs"
//     : null;
// });

userSchema.methods.hashPassword = async function() {
  this.password = await bcrypt.hash(this.password, 10)
}

userSchema.methods.validatePassword = async function(password) {
  const validPassword = await bcrypt.compare(password, this.password)
  return validPassword
}
const User = mongoose.model("User", userSchema)

module.exports = User
