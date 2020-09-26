import * as types from "../constant"
function getTodoList(payload){
    return({
        type: types.GET_ITEM_REQUEST,
        payload
    })
}
export default getTodoList;