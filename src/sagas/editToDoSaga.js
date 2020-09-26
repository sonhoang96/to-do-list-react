import {put,takeEvery} from "redux-saga/effects"
import * as types from "../constant"
import editItemAPI from '../fetchSagas/editItemAPI'
function* editToDo(action){
    console.log(action.payload)
    try {
        const {id, todo, status, onUpdate, activePage} = action.payload
        yield editItemAPI({id: id, todo: todo, status:status, onUpdate: onUpdate})
        yield put({
            type: types.UPDATE_ITEM_SUCCESS
        })
        yield put({
            type: types.PAGINATE_ITEM_REQUEST,
            payload: activePage
        })
    } catch (error) {
        yield put({
            type: types.UPDATE_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
const editData = takeEvery(types.UPDATE_ITEM_REQUEST, editToDo)
export default editData;