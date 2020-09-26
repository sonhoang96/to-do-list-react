import {put,takeEvery} from "redux-saga/effects"
import * as types from "../constant"
import updateStatus from "../fetchSagas/updateStatus"

function* changeStatus(action){
    try {
        const {id,todo,status,onUpdate,activePage} = action.payload;
        yield updateStatus({
            id: id, 
            todo: todo, 
            status: status, 
            onUpdate
        });
        yield put({
            type: types.UPDATE_STATUS_ITEM_SUCCESS
        })
        yield put({
            type: types.PAGINATE_ITEM_REQUEST,
            payload: activePage
        })
    } catch (error) {
        yield put({
            type: types.UPDATE_STATUS_EDITING_FAILURE,
            payload: error.message
        })
    }
}

function* changeStatusUpdate(action){
    // console.log(action)
    try {
        const { id, onUpdate, activePage, todo, status } = action.payload
        yield updateStatus({
            id: id, 
            todo: todo, 
            onUpdate: onUpdate, 
            status: status
        });

        yield put({
            type: types.UPDATE_STATUS_EDITING_SUCCESS,
            payload: {
                id: id,
                todo: todo,
                onUpdate: true
            }
        })

        yield put({
            type: types.PAGINATE_ITEM_REQUEST,
            payload: activePage
        })
    } catch (error) {
        yield put({
            type: types.UPDATE_STATUS_EDITING_FAILURE,
            payload: error.message
        })
    }
}

const updateNewStatus = takeEvery(types.UPDATE_STATUS_ITEM_REQUEST, changeStatus)
const updateStatusEdit = takeEvery(types.UPDATE_STATUS_EDITING_REQUEST, changeStatusUpdate)
export {
    updateNewStatus,
    updateStatusEdit
}