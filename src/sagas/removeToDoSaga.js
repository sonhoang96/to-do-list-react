import {put,takeEvery} from "redux-saga/effects"
import * as types from "../constant"
import removeToDo from '../fetchSagas/removeToDo'
import getList from '../fetchSagas/getList'
function* removeItem(action){
    console.log(action.payload)
    try {
        const {id, activePage} = action.payload;
        //call removeAPI
        yield removeToDo(id)
        yield put({
            type: types.REMOVE_ITEM_SUCCESS
        })

        //condition if last page is out
        const totalItem = yield getList();
        const totalPage = Math.ceil(totalItem.length / 4);
        if(totalPage >= activePage){
            yield put({
                type: types.PAGINATE_ITEM_REQUEST,
                payload: activePage
            })
        }else{
            yield put({
                type: types.PAGINATE_ITEM_REQUEST,
                payload: totalPage 
            })
        }
    } catch (error) {
        yield put({
            type: types.REMOVE_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
const removeData = takeEvery(types.REMOVE_ITEM_REQUEST, removeItem)
export default removeData;