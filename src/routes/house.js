const router = require("express").Router()
const {
  getAllHouses,
  addHouse,
  updatePicture
} = require("../controllers/house")
const { uploadImage } = require("../utils/upload")

// router.get("/", (req, res) => {
//   res.send("welecom to get house function!!")
// })

router.get("/", getAllHouses)
router.post("/", addHouse)
router.put("/:id/housePicture", uploadImage("id", "filepath"), updatePicture)

module.exports = router
