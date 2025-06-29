const express = require('express');
const router = express.Router();
const {addHabit, getHabit, getHabits, updateHabit, deleteHabit} = require('./../controllers/habitController');
const protect = require('./../middleware/authMiddleware');


router.get('/:id', protect, getHabit);
router.get('/', protect, getHabits);

router.post('/', protect, addHabit);

router.put('/:id', protect, updateHabit);

router.delete('/:id', protect, deleteHabit);

module.exports = router;
