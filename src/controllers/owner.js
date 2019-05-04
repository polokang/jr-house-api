const ownerService = require("../services/owner")

const { formatResponse } = require("../utils/helper")

async function getAllOwners(req, res) {
  const owners = await ownerService.getAll()

  return formatResponse(res, { data: owners })
}

async function addOwner(req, res) {
  const {
    firstName,
    lastName,
    fullName,
    email,
    phone,
    company,
    desc
  } = req.body.Owner
  const owner = await ownerService.createOne({
    firstName,
    lastName,
    fullName,
    email,
    company,
    phone,
    desc
  })
  return formatResponse(res, owner, 201)
}

async function updateAvatar(req, res) {
  const { id } = req.params
  if (!req.file) {
    return formatResponse(res, "Image missing", 400)
  }
  const owner = await ownerService.updateOne(id, {
    avatar: req.file.location
  })
  if (!owner) {
    await deleteImage(req.file.key)
    return formatResponse(res, "Owner not found", 404)
  }

  return formatResponse(res, owner)
}

module.exports = {
  addOwner,
  updateAvatar,
  getAllOwners
}
