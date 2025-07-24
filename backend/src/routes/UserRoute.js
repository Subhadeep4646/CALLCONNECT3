const express=require('express');
const userMiddleware = require('../../middleware/usermiddleware');
const router=express.Router();
const {getRecommendedUsers,getMyFriends,sendFriendRequest,AcceptFriendRequest,getFriendRequest,getOutgoingFriendReqs}=require('../controllers/UserControl')

router.use(userMiddleware);

router.get("/RecommendedUsers",getRecommendedUsers);
router.get("/friends",getMyFriends);
router.post("/friend-request/:id",sendFriendRequest);
router.put("/friend-request/:id/accept",AcceptFriendRequest);
router.get("/friend-requests",getFriendRequest);
router.get("/outgoing-friend-requests",getOutgoingFriendReqs);

module.exports=router;