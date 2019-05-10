const express = require("express")
const houseRoute = require("./routes/house")
const userRoute = require("./routes/user")
const ownerRoute = require("./routes/owner")
const authRoute = require("./routes/auth")

const router = express.Router()

router.use("/houses", houseRoute)
router.use("/users", userRoute)
router.use("/owner", ownerRoute)
router.use("/auth", authRoute)

module.exports = router
