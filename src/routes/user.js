const router = require("express").Router()
const { addUser } = require("../controllers/user")

router.get("/", (req, res) => {
  res.send("welecom to get user function!!")
})

router.post("/", addUser)

// router.post("/", (req, res) => {
//   console.log(req.body)
//   res.send("============>")
// })

module.exports = router
