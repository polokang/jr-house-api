const houseService = require("../services/house")

const { formatResponse } = require("../utils/helper")

// async function getAllHouses(req, res) {
//   const total = await houseService.countAll();
//   const { pagination, sort, search } = convertQuery(req.query, total);

//   const house = await houseService.getAll(pagination, sort, search);

//   return formatResponse(res, { data: house, pagination });
// }

async function getAllHouses(req, res) {
  const house = await houseService.getAll()
  return formatResponse(res, { data: house })
}

async function addHouse(req, res) {
  const {
    address,
    code,
    carpark,
    bathroom,
    bedroom,
    description
  } = req.body.House
  const house = await houseService.createOne({
    address,
    carpark,
    bathroom,
    bedroom,
    description,
    _id: code
  })
  return formatResponse(res, house, 201)
}

async function updatePicture(req, res) {
  const { id } = req.params
  if (!req.file) {
    return formatResponse(res, "Image missing", 400)
  }
  const house = await houseService.updateOne(id, {
    picture: req.file.location
  })
  if (!house) {
    await deleteImage(req.file.key)
    return formatResponse(res, "House not found", 404)
  }

  return formatResponse(res, house)
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
  updatePicture
}
