const express = require('express');
const router = express.Router();
const {addHabit, getHabit, getHabits, updateHabit, deleteHabit, restoreHabit, completeHabit, pauseHabit} = require('./../controllers/habitController');
const protect = require('./../middleware/authMiddleware');


router.get('/:id', protect, getHabit);
router.get('/', protect, getHabits);

router.post('/', protect, addHabit);
router.put('/:id', protect, updateHabit);

router.delete('/:id', protect, deleteHabit);
router.put('/complete/:id', protect, completeHabit);
router.put('/restore/:id', protect, restoreHabit);
router.put('/pause/:id', protect, pauseHabit )

module.exports = router;
