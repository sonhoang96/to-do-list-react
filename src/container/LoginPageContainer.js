import React from 'react';
import LoginComponent from "../components/LoginComponent";
import register from "../actions/registerAction";
import { connect } from 'react-redux';
import login from '../actions/loginAction';
class LoginPageContainer extends React.Component {
    render() { 
        return ( 
            <LoginComponent {...this.props}/>
         );
    }
}

const mapStateToProps = (state) => {
    return{
        message: state.accountReducer.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (data) =>{
            dispatch(register(data))
        },
        login: (data) =>{
            dispatch(login(data))
        }
    }
}

export default 
connect(mapStateToProps,mapDispatchToProps)(LoginPageContainer);