const router = require("express").Router();
const { addUser,getAllusers,updatephone,deleteUser} = require("../controllers/user");
const validateAuth=require("../middleware/validateAuth");
const updateErrorHandler=require("../middleware/updateerrorHandler");
// router.get("/", (req, res) => {
//   res.send("welecom to get user function!!");
// });
// register user
router.post("/register",validateAuth,addUser);
router.get("/",getAllusers);
router.put('/:email/:phone',updateErrorHandler, updatephone);
router.delete('/:id', deleteUser);

module.exports = router;
