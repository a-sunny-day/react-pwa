import React from 'react';
import ZmCheckbox from 'components/CheckBox';
import {
    VIEWS,
    changeView,
    login,
} from 'store/actions'
import { isEmail } from "utils/index";

import {connect} from 'react-redux';

const privacyURL = 'https://zoom.us/privacy?onlycontent=1';
const serviceURL = 'https://zoom.us/terms?onlycontent=1';
const signupURL = "https://zoom.com/signin";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isEmailValid: false,
            password: "",
            isPasswordValid: false
        }
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPassordChange = this.onPassordChange.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value,
            isEmailValid: isEmail(e.target.value)
        });
    }
    onPassordChange(e) {
        this.setState({
            password: e.target.value,
            isPasswordValid: !!e.target.value
        })
    }
    onInputKeyDown(e) {
        if(e.key === "Enter") {
            this.onClickLogin();
        }
    }
    onClickLogin(e) {
        if(this.state.isEmailValid && this.state.isPasswordValid && !this.props.isLogging) {
            this.props.login(this.state.email, this.state.password);
        }
    }
    render() {
        return (
            <div className="login">
                <h2 className="login__header">Sign In</h2>
                <input 
                    className="login__email" 
                    type="text" 
                    placeholder="Your Email"
                    onChange={this.onEmailChange}
                    onKeyDown={this.onInputKeyDown}></input>
                <input 
                    className="login__password" 
                    type="password" 
                    placeholder="Your Password"
                    onChange={this.onPassordChange}
                    onKeyDown={this.onInputKeyDown}></input>
                <div className="login__btns">
                    <ZmCheckbox 
                        text="Keep me signed in"
                        checked={true} 
                        onChange={(e) => {console.log(e.target)}} />
                    <button 
                        className="login__signin" 
                        style={{
                            color: this.props.isLogging ? "red" : ''
                        }}
                        onClick={this.onClickLogin}
                        disabled={!(this.state.isEmailValid && this.state.isPasswordValid)}> Sign In</button>
                </div>
                <p className="login__confirmation">
                    By signing in, I agree to the 
                    <a href={privacyURL} target="_blank" rel="noopener noreferrer">Privacy Polcy</a>
                    &nbsp;and&nbsp;
                    <a href={serviceURL} target="_blank" rel="noopener noreferrer">Terms of Service</a>
                </p>
                <footer className="login__footer">
                    <span className="login__back" onClick={this.props.back}>&lt;&nbsp;Back</span>
                    <a href={signupURL} className="login__signup" target="_blank" rel="noopener noreferrer">Sign Up Free</a>
                </footer>
            </div>
        )
    }
}

export default connect(
    state => ({
        isLogging: state.isLogging
    }),
    dispatch => {
        return {
            back: () => dispatch( changeView(VIEWS.MAIN_LOGOUT) ),
            login: (email, password) => {
                dispatch( login(email, password) )
                    .then(data => {
                        console.log('login returned: ', data);
                    })
            }
        }
    }
)(Login);