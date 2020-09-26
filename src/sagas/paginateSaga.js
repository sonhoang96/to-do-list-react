import {put,takeEvery} from "redux-saga/effects"
import * as types from "../constant"
import paginateList from "../fetchSagas/paginateList"
import getList from "../fetchSagas/getList"
function* paginateData(action){
    try {
        const totalItems = yield getList();
        const paginatedData = yield paginateList(action.payload);
        yield put({
            type: types.PAGINATE_ITEM_SUCCESS,
            payload: {
                dataReceived: paginatedData,
                activePage: action.payload,
                totalPage : Math.ceil(totalItems.length / 4)
            }
        })

    } catch (error) {
        yield put({
            type: types.PAGINATE_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
const pagination = takeEvery(types.PAGINATE_ITEM_REQUEST, paginateData)
export default pagination;