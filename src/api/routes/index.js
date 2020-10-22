const login = require('./loginRoute')
const register = require('./registerRoute')
const user = require('./userRoute')

module.exports = (app) => {
    login(app),
    register(app),
    user(app)
}