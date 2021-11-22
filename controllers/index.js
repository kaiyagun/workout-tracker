const express = require('express')
const router = express.Router()
const workoutRoutes = require('./workoutRoutes.js');

router.use('/api/workouts',workoutRoutes);

module.exports = router;