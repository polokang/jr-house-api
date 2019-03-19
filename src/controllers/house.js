const houseService = require("../services/house");

const { formatResponse } = require("../utils/helper");

async function getAllHouses(req, res) {
  const total = await houseService.countAll();
  const { pagination, sort, search } = convertQuery(req.query, total);

  const house = await houseService.getAll(pagination, sort, search);

  return formatResponse(res, { data: house, pagination });
}

async function addHouse(req, res) {
  const { address, code, description } = req.body;
  const house = await houseService.createOne({
    address,
    description,
    _id: code
  });
  return formatResponse(res, house, 201);
}

async function deleteHouse(req, res) {
  const { address, code, description } = req.body;
  const house = await houseService.deleteOne({
    address,
    description,
    _id: code
  });
  return formatResponse(res, house, 201);
}

async function updateHouse(req, res) {
  const { address, code, description } = req.body;
  const house = await houseService.updateOne({
    address,
    description,
    _id: code
  });
  return formatResponse(res, house, 201);
}

async function readHouse(req, res) {
  const { address, code, description } = req.body;
  const house = await houseService.readOne({
    address,
    description,
    _id: code
  });
  return formatResponse(res, house, 201);
}

module.exports = {
  getAllHouses,
  addHouse,
  deleteHouse,
  updateHouse,
  readHouse
};
