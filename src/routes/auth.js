const express=require('express');
const{login}= require('../controllers/auth');
const loginAuth=require("../middleware/loginAuth");
const router=express.Router();

router.post('/:email/:password',loginAuth,login);

module.exports=router;