const express = require("express");
const houseRoute = require("./routes/house");

const router = express.Router();

router.use("/houses", houseRoute);

module.exports = router;
