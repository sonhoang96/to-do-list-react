import {put, takeEvery} from "redux-saga/effects"
import signUp from "../fetchSagas/registerUser"
import * as types from "../constant"

function* signUpUser(action){
    try {
        let result = yield signUp(action.payload);
        if(result.message === 'username exists'){
            yield put({
                type: types.REGISTER_FAILURE,
                payload: {
                    message: result.message
                }
            })
        }else{
            yield put({
                type: types.REGISTER_SUCCESS,
                payload: {
                    message: result.message
                }
            })
        }
    } catch (error) {
        yield put({
            type: types.REGISTER_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

const registerSaga = takeEvery(types.REGISTER_REQUEST, signUpUser);

export default registerSaga