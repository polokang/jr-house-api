const router = require("express").Router();
const { getAllHouses, addHouse, deleteHouse, updateHouse } = require("../controllers/house");

router.get("/", (req, res) => {
  res.send("welecom to get house function!!");
});

router.post("/", addHouse, deleteHouse,updateHouse, getAllHouses);

module.exports = router;
