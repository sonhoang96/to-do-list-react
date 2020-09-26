import {put,takeEvery} from "redux-saga/effects"
import * as types from "../constant"
import getList from "../fetchSagas/getList"
function* getDataList(){
    try {
        const res = yield getList()
        yield put({
            type: types.GET_ITEM_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
const getListSaga = takeEvery(types.GET_ITEM_REQUEST, getDataList)
export default getListSaga;