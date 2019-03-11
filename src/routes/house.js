const router = require("express").Router();
const { getAllHouses, addHouse } = require("../controllers/house");

router.get("/", (req, res) => {
  res.send("welecom to get house function!!");
});

router.post("/", addHouse);

module.exports = router;
