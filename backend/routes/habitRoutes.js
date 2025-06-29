const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();

router.post('/', addHabit);
router.get('/$id', getHabit);
router.get('/', getHabits);
router.put('/$id', updateHabit);
router.delete('/$id', deleteHabit);

module.exports = router;