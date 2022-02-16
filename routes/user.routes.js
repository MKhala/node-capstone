const express = require('express');
const router = express.Router()
const userController = require('../controllers/user.controller')


router.get('/api/users', userController.getUsers)
router.get('/api/users/:_id/logs', userController.getUserLogs)
router.post('/api/users',userController.addUser)


module.exports = router