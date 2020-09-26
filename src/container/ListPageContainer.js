import React from 'react';
import {connect} from "react-redux"
import HomeComponent from "../components/HomeComponent"
import getToDoList from '../actions/getItemAction'
import * as change from '../actions/changeStatusAction'
import addNewToDo from '../actions/addToDoAction'
import paginateToDo from '../actions/paginatieAction'
import removeToDo from '../actions/removeToDoAction'
import editItem from '../actions/updateToDoAction';
class ListPageContainer extends React.Component {
    componentDidMount(){
        this.props.paginateLoad(1);
    }
    render() {
        return(
            <HomeComponent {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {

    return {
       listToDo: state.paginateReducer.listToDo,
       totalPage: state.paginateReducer.totalPage,
       activePage: state.paginateReducer.activePage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(getToDoList())
        },
        paginateLoad: (activePage) => {
            dispatch(paginateToDo(activePage))
        },
        changeStatus: (data) => {
            dispatch(change.changeStatusItem(data))
        },
        addToDo: (data) => {
            dispatch(addNewToDo(data))
        },
        deleteToDo: (id) => {
            dispatch(removeToDo(id))
        },
        statusUpdate: (status) => {
            dispatch(change.changeStatusUpdate(status))
        },
        itemUpdate: (data) => {
            dispatch(editItem(data));
        }
    }
}

export default 
connect(mapStateToProps,mapDispatchToProps)(ListPageContainer);