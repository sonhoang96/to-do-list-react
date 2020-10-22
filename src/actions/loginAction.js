import * as types from "../constant"

function login(payload){
    console.log(payload)
    return ({
        type: types.LOGIN_REQUEST,
        payload
    })
}
export default login