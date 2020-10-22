import * as types from '../constant'
import * as store from '../store'

export default (state = store, action) => {
    switch(action.type){
        case types.REGISTER_REQUEST:
        case types.LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return{
                ...state,
                dataFetched: true,
                isFetching: false,
                error: false,
                errorMessage: null,
                message: action.payload.message,
                login: true
            }
        case types.REGISTER_FAILURE:
        case types.LOGIN_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage,
                message: action.payload.message
            }
        default:
            return state
    }
}