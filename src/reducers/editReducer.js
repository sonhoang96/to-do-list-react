import * as types from '../constant'
import * as store from '../store'

export default (state = store, action) => {
    switch(action.type){
        case types.UPDATE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.UPDATE_ITEM_SUCCESS:
            return{
                ...state,
                dataFetched: true,
                isFetching: false,
                error: false,
                errorMessage: null
            }
        case types.UPDATE_ITEM_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage,
            }
        default:
            return state
    }
}