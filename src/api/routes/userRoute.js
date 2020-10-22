module.exports = (app) => {
    const user = require('../controllers/userController');

    app.route('/user')
        .get(user.get_all_users)
}