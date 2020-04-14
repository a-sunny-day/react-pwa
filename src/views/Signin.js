import React from 'react';
import {withRouter} from 'react-router-dom';
import ZmCheckbox from 'components/CheckBox';
import {
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
            <div className="signin">
                <h2 className="signin-header">Sign In</h2>
                <input
                    className="signin-email" 
                    type="text" 
                    placeholder="Your Email"
                    onChange={this.onEmailChange}
                    onKeyDown={this.onInputKeyDown}></input>
                <input
                    className="signin-password" 
                    type="password" 
                    placeholder="Your Password"
                    onChange={this.onPassordChange}
                    onKeyDown={this.onInputKeyDown}></input>
                <div className="btns-signin">
                    <ZmCheckbox 
                        text="Keep me signed in"
                        checked={true} 
                        onChange={(e) => {console.log(e.target)}} />
                    <button
                        className="signin-signin" 
                        style={{
                            color: this.props.isLogging ? "red" : ''
                        }}
                        onClick={this.onClickLogin}
                        disabled={!(this.state.isEmailValid && this.state.isPasswordValid)}> Sign In</button>
                </div>
                <p className="signin-confirmation">
                    By signing in, I agree to the 
                    <a href={privacyURL} target="_blank" rel="noopener noreferrer">Privacy Polcy</a>
                    &nbsp;and&nbsp;
                    <a href={serviceURL} target="_blank" rel="noopener noreferrer">Terms of Service</a>
                </p>
                <footer className="signin-footer">
                    <span className="signin-back" onClick={this.props.back}>&lt;&nbsp;Back</span>
                    <a href={signupURL} className="signin-signup" target="_blank" rel="noopener noreferrer">Sign Up Free</a>
                </footer>
            </div>
        )
    }
}

const mapState = state => ({
    isLogging: state.isLogging
});

const mapDispatch = (dispatch, ownProps) => ({
    back: () => {
        const { history } = ownProps;
        history.goBack();
    },
    login: (email, password) => {
        const {history} = ownProps;
        dispatch( login(email, password) )
            .then(data => {
                history.replace({
                    pathname: '/'
                });
            })
    }
})
export default withRouter(connect( mapState, mapDispatch )(Login) );