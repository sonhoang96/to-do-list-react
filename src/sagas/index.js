import {all} from "redux-saga/effects"
import addData from "./addToDoSaga";
import getListSaga from "./getListSaga"
import pagination from "./paginateSaga";
import {updateNewStatus, updateStatusEdit} from "./updateStatusSaga"
import removeData from "./removeToDoSaga"
import editData from "./editToDoSaga";
function* rootSaga(){
    yield all([
        getListSaga,
        updateNewStatus,
        updateStatusEdit,
        addData,
        pagination,
        removeData,
        editData
    ])
}
export default rootSaga;