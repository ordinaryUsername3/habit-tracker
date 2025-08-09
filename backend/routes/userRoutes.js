const express = require('express');
const router = express.Router();
const {signup, login, logout, updateUser, deleteUser, getUser, updatePassword, refreshToken} = require('./../controllers/userController');
const protect = require('./../middleware/headerAuthMiddleware')

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh', refreshToken);
router.put('/changePassword', protect, updatePassword);

router.route('/')
.put(protect, updateUser)
.delete(protect, deleteUser)
.get(protect, getUser)

module.exports = router;