module.exports = (app) => {
    const register = require('../controllers/registerController')
    
    app.route('/register')
        // .get(register.get_list)
        .post(register.create_user)
}