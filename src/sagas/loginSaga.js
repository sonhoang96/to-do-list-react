import { put, takeEvery } from "redux-saga/effects"
import * as types from "../constant"
import loginAPI from "../fetchSagas/loginUser"

function* loginSaga(action){
    const data = action.payload;
    try {
        const result = yield loginAPI(data);
        if(result.message === 'username is not exist' || result.message === 'password is incorrect'){
            yield put({
                type: types.LOGIN_FAILURE,
                payload:{
                    message: result.message
                }
            }) 
        }else{
            yield put({
                type: types.LOGIN_SUCCESS,
                payload:{
                    message: result.message
                }
            })
        }
        console.log('RESULLLLLLT', result)
        // yield put({
        //     type: types.LOGIN_SUCCESS,
        //     payload:{
        //         message: result.message
        //     }
        // })
    } catch (error) {
        yield put({
            type: types.LOGIN_FAILURE,
            payload:{
                errorMessage: error.message,
            }
        })
    }
}
const signInSaga = takeEvery(types.LOGIN_REQUEST, loginSaga)
export default signInSaga