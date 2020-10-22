module.exports = (app) => {
    const login = require('../controllers/loginController')

    app.route('/login')
        .post(login.search_user);
}