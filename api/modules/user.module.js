const mongoose = require('mongoose')


const UserSchema =mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true, },
    token: { type: String }
})

const userModule = mongoose.model('Users' , UserSchema)
module.exports= userModule