const express = require('express');
const userControler = require('../controllers/user')
const mainPagecontroler = require('../controllers/mainPage')
const authController = require('../middleware/authentication')
const router = express.Router();

router.post('/signup',userControler.userSignup);
router.post('/signin',userControler.userSignin);


router.post('/post-message',authController.authorization,userControler.saveChatHistory)
router.get('/get-message',authController.authorization,userControler.getUserChatHistory);
router.get('/get-users',authController.authorization,userControler.getAlluser)
router.get('/get-user',authController.authorization,userControler.getcurrentuser)
router.get('/get-messages',userControler.getAllChatHistory);
router.post('/create-group',authController.authorization,userControler.createGroup)

router.get('/get-groups',userControler.getAllgroups)
router.get('/get-mygroups',authController.authorization,userControler.getMygroups)
router.get('/get-group',userControler.getGroupbyId)
router.get('/get-group-messages',userControler.getGroupChatHistory)
router.get('/get-group-members',userControler.getGroupMembersbyId)
router.get('/',mainPagecontroler.getMainpage)
module.exports = router;