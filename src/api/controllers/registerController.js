const User = require('../models/UserModel');
const Todolist = require('../models/TodolistModel');
const Bcrypt = require('bcryptjs');
// exports.get_list = async(req,res) => {
//     const list = await User.find({});
//     res.send(list)
// }
exports.create_user = async (req,res) => {
    const data = req.body;
    console.log(data)
    const checkUser = await User.findOne({username: data.username});
    if(checkUser){
        return res.send({
            message: 'username exists'
        })
    }else{
        //save newToDo
        const newTodo = new Todolist({
            todolist: [{
                todo: 'Write something you can do today',
                status: 'unfinished',
                onUpdate: false
            }]
        });
        const savedTodo = await newTodo.save();
    
        if(savedTodo){
            let todoId = savedTodo._id;
            //save id of newToDo to newUser
            let newUser = new User({
                username: data.username,
                password: Bcrypt.hashSync(data.password, 10),
                todolist: todoId
            });
            let savedUser = await newUser.save();
    
            if(savedUser){
                //save id of newUser to newToDo
                Todolist.findByIdAndUpdate(todoId, {$set: {user: savedUser._id}}).exec();
            }
            return res.send({
                message: 'register success'
            })
        }
    }  
}