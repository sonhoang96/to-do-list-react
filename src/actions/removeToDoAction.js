import * as types from "../constant"
function addNewToDo(payload){
    return({
        type: types.REMOVE_ITEM_REQUEST,
        payload
    })
}
export default addNewToDo;