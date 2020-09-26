import * as types from "../constant"
function paginateToDo(payload){
    return({
        type: types.PAGINATE_ITEM_REQUEST,
        payload
    })
}
export default paginateToDo;