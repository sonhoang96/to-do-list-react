import * as types from "../constant"
function addNewToDo(payload){
    return({
        type: types.ADD_ITEM_REQUEST,
        payload
    })
}
export default addNewToDo;