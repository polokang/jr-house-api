const router = require("express").Router()
const { getAllOwners, addOwner, updateAvatar } = require("../controllers/owner")
const { uploadImage } = require("../utils/upload")

router.get("/", getAllOwners)
router.put("/:id/avatar", uploadImage("id", "filepath"), updateAvatar)
router.post("/", addOwner)

module.exports = router
