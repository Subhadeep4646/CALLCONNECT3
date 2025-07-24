const express = require('express');
const router = express.Router();

const { registerUser, loginUser , logoutUser,onboard } = require('../controllers/userfunc.js');
const userMiddleware = require('../../middleware/usermiddleware.js');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout',userMiddleware, logoutUser);
router.post('/onboarding',userMiddleware,onboard);


router.get('/checkAuth', userMiddleware, (req, res) => {
        res.status(200).json({success:true,user:req.user});
});



module.exports = router;
