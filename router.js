const express = require('express');
const Router= express.Router()
const usersRoutes = require('./routes/user.routes')
const logRoutes = require('./routes/log.routes')

Router.use([usersRoutes, logRoutes])

Router.get('/api/', (req, res) => {
    res.send('Api get works') 
})


Router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
  });

module.exports = Router
