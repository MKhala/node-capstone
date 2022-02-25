const express = require('express');
const router = express.Router()
const logController = require('../controllers/log.controller')


router.get('/api/logs', logController.getLogs)
router.post('/api/users/:_id/exercises', logController.addLog)


module.exports = router