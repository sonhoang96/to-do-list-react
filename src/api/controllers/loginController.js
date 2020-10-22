const User = require('../models/UserModel');
const Bcrypt = require('bcryptjs');
exports.search_user = async (req,res) => {
    const data = req.body;
    const user = await User.findOne({username: data.username});
    try {
        //check username
        if(!user){
            return res.send({
                message: 'username is not exist'
            })
        }
        //check password
        if(!Bcrypt.compareSync(data.password, user.password)){
            return res.send({
                message: 'password is incorrect'
            })
        }
        
        // send the response
        let responseData = await User.findOne({username: data.username}).populate({
            path: 'todolist'
        })
        return res.send({
            username: responseData.username,
            list: responseData.todolist.todolist,
            message: "login successful"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}