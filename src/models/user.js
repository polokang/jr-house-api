const mongoose = require("mongoose");
const Joi = require("joi");

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
      minlength: 10
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      validate: {
        validator: email => !Joi.validate(email, Joi.string().email()).error,
        msg: "Invalid email format"
      }
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: password =>
          !Joi.validate(password, Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/))
            .error,
        msg: "Invalid password format"
      }
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
    role: ["admin", "owner", "tenant"],
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

const User = mongoose.model("User", userSchema);

module.exports = User;
