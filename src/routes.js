const express = require("express");
const houseRoute = require("./routes/house");
const userRoute = require("./routes/user");
const authRoute=require('./routes/auth')

const router = express.Router();

router.use("/houses", houseRoute);
router.use("/users", userRoute);
router.use("/auth", authRoute);

module.exports = router;
