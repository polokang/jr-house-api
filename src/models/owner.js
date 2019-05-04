const mongoose = require("mongoose")
const Joi = require("joi")

const companySchema = new mongoose.Schema(
  {
    state: String,
    city: String,
    companyName: String
  },
  { _id: false }
)

const ownerSchema = new mongoose.Schema(
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
    company: companySchema,
    avatar: {
      type: String,
      validate: {
        validator: url => !Joi.validate(url, Joi.string().uri()).error,
        msg: "Invalid url format"
      }
    },
    age: Number,
    desc: String,
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
)

ownerSchema.statics.findByName = async function(key) {
  return this.find({ fullName: { $regex: key || "", $options: "i" } })
}

ownerSchema.virtual("title").get(function() {
  return this.gender === "male" ? "Mr" : this.gender === "female" ? "Mrs" : null
})

const Owner = mongoose.model("Owner", ownerSchema)

module.exports = Owner
