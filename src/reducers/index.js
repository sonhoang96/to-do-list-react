import {combineReducers} from "redux"
import getListReducer from "./getListReducer"
import updateStatusReducer from "./updateStatusReducer"
import updateEditReducer from "./updateEditReducer"
import addToDoReducer from "./addToDoReducer"
import paginateReducer from"./paginateReducer"
import removeReducer from"./removeReducer"
import accountReducer from"./accountReducer"
const rootReducer = combineReducers({
    getListReducer,
    updateStatusReducer,
    updateEditReducer,
    addToDoReducer,
    paginateReducer,
    removeReducer,
    accountReducer
})

export default rootReducer;