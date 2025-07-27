const express = require('express');
const router = express.Router();
const {signup, login, logout, updateUser, deleteUser, getUser, updatePassword} = require('./../controllers/userController');
const protect = require('./../middleware/authMiddleware');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.put('/changePassword', protect, updatePassword);

router.route('/')
.put(protect, updateUser)
.delete(protect, deleteUser)
.get(protect, getUser)

module.exports = router;