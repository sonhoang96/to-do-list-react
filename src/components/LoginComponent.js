import React from 'react';
import { Redirect } from 'react-router';
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            action: 'sign in',
            status: 'password',
            message: '',
            redirect: false
        }
    this.nameRef = React.createRef();
    this.passwordRef = React.createRef();

    //Focus
    this.onFocusName = this.onFocusName.bind(this);
    this.onFocusPassword = this.onFocusPassword.bind(this);

    //Blur
    this.onBlurName = this.onBlurName.bind(this);
    this.onBlurPassword = this.onBlurPassword.bind(this);

    //handleChange
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    //displayPassword
    this.displayPassword = this.displayPassword.bind(this);

    //changeAction
    this.changeAction = this.changeAction.bind(this);

    //submitData
    this.submitData = this.submitData.bind(this);
}

    handleChangeName(e){
        this.setState({
            username: e.target.value
        })
    }

    handleChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    onFocusName(){
        this.nameRef.current.classList.add('focus')
        if(this.state.name !== ''){
            this.nameRef.current.classList.add('focus')
        }
    }
    onFocusPassword(){
        this.passwordRef.current.classList.add('focus')
        if(this.state.password !== ''){
            this.passwordRef.current.classList.add('focus')
        }
    }
    onBlurName(){
        if(this.state.username === ''){
            this.nameRef.current.classList.remove('focus')
        }
    }
    onBlurPassword(){
        if(this.state.password === ''){
            this.passwordRef.current.classList.remove('focus')
        }
    }
    displayPassword(){
        if(this.state.status === 'password'){
            this.setState({
                status: 'password visibility'
            })
        }else{
            this.setState({
                status: 'password'
            })
        }
    }
    changeAction(){
        if(this.state.action === 'sign in'){
            this.setState({
                username: '',
                password:'',
                action: 'register',
                message: ''
            })
        }else{
            this.setState({
                username: '',
                password:'',
                action: 'sign in',
                message: ''
            })
        }
    }
    submitData(){
        if(this.state.action === 'register' || this.state.action === 'sign in'){
            if(this.state.username === ''){
                this.setState({
                    message: 'username is empty'
                })
            }else if(this.state.password === ''){
                this.setState({
                    message: 'password is empty'
                })
            }else{
                //if display register form
                if(this.state.action === 'register'){
                    this.props.register({
                        username: this.state.username,
                        password: this.state.password
                    })
                }
                //if display Sign In form
                if(this.state.action === 'sign in'){
                    this.props.login({
                        username: this.state.username,
                        password: this.state.password
                    })
                }
                setTimeout(() => 
                    this.setState({
                        message: this.props.message
                    }), 500
                )
            }
        }
    }
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        const nextMessage = nextProps.message;
        if(nextMessage === 'register success'){
            this.setState({
                message: nextProps.message,
                action: 'sign in'
            })
        }
        if(nextMessage === 'username exists'){
            this.setState({
                message: nextProps.message
            })
        }
        if(nextMessage === 'login successful'){
            this.setState({
                message: 'login successful',
                redirect: true
            })
        }
    }
    render() {
        // console.log(this.props.message, this.state)
        return (
            <div className="frame">
                {/* change header title color if user types */}
                <h1 style={this.state.username === '' & this.state.password === '' ? {color: '#5c6bc0'} : {color: '#5c5d5c'}}>{this.state.action}</h1>
                {/* report if username or password empty */}
                {this.state.message === 'username is empty' || this.state.message === 'password is empty' ?
                    <p className="message">{this.state.message}</p>
                :
                    this.state.message === 'register success' ?
                        <i className="far fa-check-circle"></i>
                    :
                        this.props.message === 'login successful' ?
                            <p style={{color: '#388E3C'}}>{this.state.message}</p>
                        :
                            null
                }
                <div className="form">
                    <div className="name-login" ref={this.nameRef} onFocus={this.onFocusName}>
                        <i className="fas fa-user"></i>
                        <p>username</p>
                        <input className="form-name" type="text" onBlur={this.onBlurName} onChange={this.handleChangeName} value={this.state.username}/>
                        {/* message recieved from server */}
                        {this.state.message === 'username is not exist'  && this.state.action === 'sign in'?
                            <span className="message">{this.state.message}</span>    
                        :
                            this.state.message === 'username exists' && this.state.action === 'register' ?
                                <span className="message">{this.state.message}</span> 
                            :
                                null
                        }
                    </div>
                    <div className="password-login" ref={this.passwordRef} onFocus={this.onFocusPassword}>
                        <i className="fas fa-lock"></i>
                        <p>password</p>
                        {/* display password */}
                        {this.state.status === 'password' ?
                            <input className="form-password" type="password" onChange={this.handleChangePassword} onBlur={this.onBlurPassword} value={this.state.password}/>
                        :
                            <input className="form-password" type="text" onChange={this.handleChangePassword} onBlur={this.onBlurPassword} value={this.state.password}/>
                        }
                        {this.state.message === 'password is incorrect' && this.state.action === 'sign in'?
                            <span className="message">{this.state.message}</span>    
                        :
                            null
                        }
                    </div>
                    <div className="tools">
                        {/* display password */}
                        {this.state.status === 'password' ?
                            <i className="far fa-square form-display-pw" onClick={this.displayPassword}></i>
                        :
                            <i className="far fa-check-square form-display-pw" onClick={this.displayPassword}></i>
                        }
                        {/* login form or register form */}
                        {this.state.action === 'sign in' ?
                            <button className="form-register" onClick={this.changeAction}>register?</button>
                        :
                            <button className="form-login" onClick={this.changeAction}>sign in?</button>
                        }
                    </div>
                    {/* submit button */}
                    <button className="form-submit" onClick={this.submitData}>submit</button>
                    {this.state.redirect ? <Redirect to="/user"/> : null}
                </div>
            </div>
         );
    }
}
 
export default LoginComponent;