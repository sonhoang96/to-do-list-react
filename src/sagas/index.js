import {all} from "redux-saga/effects"
import addData from "./addToDoSaga";
import getListSaga from "./getListSaga"
import pagination from "./paginateSaga";
import {updateNewStatus, updateStatusEdit} from "./updateStatusSaga"
import removeData from "./removeToDoSaga"
import editData from "./editToDoSaga";
import registerSaga from "./registerSaga";
import signInSaga from "./loginSaga";
function* rootSaga(){
    yield all([
        getListSaga,
        updateNewStatus,
        updateStatusEdit,
        addData,
        pagination,
        removeData,
        editData,
        registerSaga,
        signInSaga
    ])
}
export default rootSaga;