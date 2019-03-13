const express = require("express");
const houseRoute = require("./routes/house");
const userRoute = require("./routes/user");

const router = express.Router();

router.use("/houses", houseRoute);
router.use("/users", userRoute);

module.exports = router;
