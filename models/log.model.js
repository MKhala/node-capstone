
const { Schema, model, Types } = require('mongoose')

const Log = new Schema({
    description: {
        type: 'string',
        required: true
    },
    duration: {
        type: 'string',
        required: true
    },
    date: {
        type: Date, 
        default: new Date()
    },
    user: {
        type: Types.ObjectId,
        ref: 'User'
    }
})



module.exports = model('Log', Log, 'log')