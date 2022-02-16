const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./router')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const DB_URL = 'mongodb+srv://user:nnmg3MOvY1K5Jrh2@cluster0.bsxxb.mongodb.net/Cluster0?retryWrites=true&w=majority'

require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)


async function startApp(){
  try {
    const listener = app.listen(process.env.PORT || 3000, async () => {
      await mongoose.connect(DB_URL)
      console.log('Your app is listening on port ' + listener.address().port)
    })
  } catch(err){
    console.log(e);
  }
}

startApp()
