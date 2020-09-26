import * as types from "../constant"
function editItem(payload){
    return({
        type: types.UPDATE_ITEM_REQUEST,
        payload
    })
}
export default editItem;