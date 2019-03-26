const router = require("express").Router();
const { addUser,getAllusers,updateUser,deleteUser} = require("../controllers/user");
const validateAuth=require("../middleware/validateAuth");

// router.get("/", (req, res) => {
//   res.send("welecom to get user function!!");
// });
// register user
router.post("/register",validateAuth,addUser);
router.get("/",getAllusers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
