const User = require('../models/user.model')
const Log = require('../models/log.model')

async function getUsers({res}){
  try {
    return await User.find({}).then(users=> {
      res.send({result: 'Success', users})
    })
  } catch(e) {
    console.log(e);
    return res.status(500).json({message: 'Cannot get users'})
  }
}

async function getUserLogs(req, res){
  try {
    const {limit = 10, from = new Date('1970-01-01'), to = new Date()} = req.query
    
    const logs = async() => { 
      return await Log.find({});
    }

    await User.findOne({
      _id: req.params._id
    })
    .populate({
      path: 'logs',
      match: {
        date: {
          $gte: new Date(from),
          $lte: new Date(to)
        },
      },
      select: "-user",
      options: {
        limit: JSON.parse(limit)
      }
    })
    .exec(async (err, result)=>{
      if(err){
        console.log(err)
        return res.status(400).json({message: err.message});
      } 
      res.send({message: 'Success', result, count: (await logs()).length})
    })

    
    
  } catch(e) {
    console.log(e);
    return res.status(404).json({message: e.message})
  }
}

async function addUser(req, res){
  try {
    const { username } = req.body
    const userExcist = await User.findOne({username})
    
    if(userExcist)
      return res.status(400).json({message: 'User already exists'})

    const user = new User({username})
    await user.save()

    res.send({result: 'Success', user: {_id: user._id, username: user.username}})
  } catch(e) {
    console.log(e);
    return res.status(500).json({message: 'Cannot get users'})
  }
}

module.exports = {
  addUser,
  getUsers,
  getUserLogs
}