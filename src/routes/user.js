const router = require("express").Router();
const { addUser,getAllusers,updateUser,deleteUser} = require("../controllers/user");


router.get("/", (req, res) => {
  res.send("welecom to get user function!!");
});

router.post("/",addUser);
router.get("/",getAllusers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
