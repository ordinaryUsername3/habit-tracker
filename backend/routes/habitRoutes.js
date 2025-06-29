const express = require('express');
const router = express.Router();
const {addHabit, getHabit, getHabits, updateHabit, deleteHabit} = require('./../controllers/habitController')

router.post('/', addHabit);
router.get('/:id', getHabit);
router.get('/', getHabits);
router.put('/:id', updateHabit);
router.delete('/:id', deleteHabit);

module.exports = router;