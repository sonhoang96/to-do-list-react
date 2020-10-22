import * as types from '../constant';

function register(payload){
    return ({
        type: types.REGISTER_REQUEST,
        payload
    })
}

export default register;