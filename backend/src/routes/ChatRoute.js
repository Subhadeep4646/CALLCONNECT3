const express=require('express');
const userMiddleware=require('../../middleware/usermiddleware');
const {getStreamToken}=require('../controllers/chat-controller')

const router=express.Router();

router.get('/token',userMiddleware,getStreamToken);



module.exports=router;