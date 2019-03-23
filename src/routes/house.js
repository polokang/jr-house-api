const router = require("express").Router();
const { getAllHouses, addHouse, deleteHouse, updateHouse, getHouseByID } = require("../controllers/house");

// router.get("/", (req, res) => {
//   res.send("welecom to get house function!!");
// });

// router.post("/", addHouse, deleteHouse,updateHouse, getAllHouses);

router.post("/", addHouse);
router.get("/", getAllHouses);
router.get("/:id", getHouseByID);

module.exports = router;
