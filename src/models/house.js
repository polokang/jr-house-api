const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
  _id: {
    type: String,
    uppercase: true,
    alias: "code"
  },
  address: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  }
});

houseSchema.statics.searchQuery = async function(pagination, sort, search) {
  const { page, pageSize } = pagination;
  return this.find({ _id: { $regex: search, $options: "i" } })
    .sort(sort)
    .skip((page - 1) * pageSize)
    .limit(pageSize);
};

module.exports = mongoose.model("House", houseSchema);
