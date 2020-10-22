const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let user = new Schema({
    id: Schema.Types.ObjectId,
    username: String,
    password: String,
    todolist: {
        type: Schema.Types.ObjectId,
        ref: 'Todolist'
    }
})

module.exports = mongoose.model('User', user)