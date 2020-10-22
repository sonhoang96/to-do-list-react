const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let todolist = new Schema({
    id: Schema.Types.ObjectId,
    todolist: [{
      id: Number,
      todo: String,
      status: String,
      onUpdate: Boolean
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    } 
})

module.exports = mongoose.model('Todolist', todolist)