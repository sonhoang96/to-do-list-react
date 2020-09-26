import * as types from '../constant'
import * as store from '../store'

export default (state = store, action) => {
    switch(action.type){
        case types.PAGINATE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.PAGINATE_ITEM_SUCCESS:
            let dataPaginated = action.payload.dataReceived;
            let activePage = action.payload.activePage;
            let totalPage = action.payload.totalPage;
            return{
                ...state,
                dataFetched: true,
                isFetching: false,
                error: false,
                errorMessage: null,
                listToDo: dataPaginated,
                activePage: activePage,
                totalPage: totalPage
            }
        case types.PAGINATE_ITEM_FAILURE:
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