const User = require('../models/UserModel');
const Todolist = require('../models/TodolistModel');
const Bcrypt = require('bcryptjs');
exports.get_all_users = (req,res) => {
    User.findOne({username: 'omen'})
        .populate({
            path: 'todolist'
        })
        .exec((err,result) => {
            if(err) res.send(err)
            res.send(result)
        })
}
