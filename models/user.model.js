
const { Schema, model, Types } = require('mongoose')

const User = new Schema({
    username: {
        type: 'string',
        required: true
    },
    logs: [{
        type: Types.ObjectId,
        ref: 'Log' 
    }]
    
})


module.exports = model('User', User, 'users')