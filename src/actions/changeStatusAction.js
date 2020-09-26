import * as types from "../constant"
function changeStatusItem(payload){
    return({
        type: types.UPDATE_STATUS_ITEM_REQUEST,
        payload
    })
}

function changeStatusUpdate(payload){
    return({
        type: types.UPDATE_STATUS_EDITING_REQUEST,
        payload
    })
}
export {
    changeStatusItem,
    changeStatusUpdate
}