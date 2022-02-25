const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./router')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


require('dotenv').config()

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bsxxb.mongodb.net/Cluster0?retryWrites=true&w=majority`


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
