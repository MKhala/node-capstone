const User = require('../models/user.model')
const Log = require('../models/log.model')

async function getLogs(req, res){
  try {
    return await Log.find({}).then(logs=> {
      res.send({result: 'Success', logs})
    })
  } catch(e) {
    console.log(e);
    return res.status(500).json({message: 'Cannot get logs'})
  }
}

async function addLog(req, res){
  try {
    const {description, duration, date} = req.body

    const user = await User.findOne({_id: req.params._id})

    const log = new Log({
      description,
      duration,
      date: new Date(date) || new Date().toISOString().split('T')[0],
      user: user._id
    })
    log.save().then(()=>{
      user.logs.push(log._id)
      user.save()
      res.send({result: 'Success'})
    })
    
  } catch(e) {
    console.log(e);
    return res.status(500).json({message: 'Cannot add log'})
  }
}

module.exports = {
  addLog,
  getLogs
}