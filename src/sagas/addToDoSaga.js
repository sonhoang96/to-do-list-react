import {put,takeEvery} from "redux-saga/effects"
import * as types from "../constant"
import addToDo from '../fetchSagas/addToDo'
import getList from '../fetchSagas/getList'
function* addNewData(action){
    // console.log(action.payload)
    try {
        const {todo, status, activePage, onUpdate} = action.payload;
        yield addToDo({todo: todo, status: status, onUpdate: onUpdate})
        yield put({
            type: types.ADD_ITEM_SUCCESS,
            payload: action.payload
        })

        const list = yield getList();
        const totalPage = Math.ceil(list.length / 4);
        //if data recieve from server === 0, set activePage = 1
        if(Object.keys(list).length === 0){
            let activePage = 1;
            yield put({
                type: types.PAGINATE_ITEM_REQUEST,
                payload: activePage
            })
        }else{
            console.log(totalPage,activePage)
            if(totalPage >= activePage){
                yield put({
                    type: types.PAGINATE_ITEM_REQUEST,
                    payload: totalPage
                })
            }else{
                yield put({
                    type: types.PAGINATE_ITEM_REQUEST,
                    payload: activePage
                })
            }
        }
    } catch (error) {
        yield put({
            type: types.ADD_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
const addData = takeEvery(types.ADD_ITEM_REQUEST, addNewData)
export default addData;