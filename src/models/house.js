const mongoose = require("mongoose");
const Joi = require("joi");

const addressSchema = new mongoose.Schema(
  {
    city: String,
    address: String,
    postcode: Number
  },
  { _id: false }
);

const houseSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      uppercase: true,
      alias: "code"
    },
    address: addressSchema,
    description: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      validate: {
        // validator.js
        // express-validator
        validator: url => !Joi.validate(url, Joi.string().uri()).error,
        msg: "Invalid url format"
      }
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    tenant: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    status: { type: ["lease", "leased"], index: true },

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

//find this house owner has
houseSchema.methods.countSameOwner = async function() {
  return this.model("House").find({});
};

houseSchema.statics.searchQuery = async function(pagination, sort, search) {
  const { page, pageSize } = pagination;
  return this.find({ _id: { $regex: search, $options: "i" } })
    .sort(sort)
    .skip((page - 1) * pageSize)
    .limit(pageSize);
};

module.exports = mongoose.model("House", houseSchema);
