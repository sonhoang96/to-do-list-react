import {combineReducers} from "redux"
import getListReducer from "./getListReducer"
import updateStatusReducer from "./updateStatusReducer"
import updateEditReducer from "./updateEditReducer"
import addToDoReducer from "./addToDoReducer"
import paginateReducer from"./paginateReducer"
import removeReducer from"./removeReducer"
const rootReducer = combineReducers({
    getListReducer,
    updateStatusReducer,
    updateEditReducer,
    addToDoReducer,
    paginateReducer,
    removeReducer
})

export default rootReducer;