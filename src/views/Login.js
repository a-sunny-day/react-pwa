import React from 'react';
import ZmCheckbox from 'components/CheckBox';
import {
    VIEWS,
    changeView
} from 'store/actions'
import {connect} from 'react-redux';

const privacyURL = 'https://zoom.us/privacy?onlycontent=1';
const serviceURL = 'https://zoom.us/terms?onlycontent=1';
const signupURL = "https://zoom.com/signin";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ""
        }
    }

    render() {
        return (
            <div className="login">
                <h2 className="login__header">Sign In</h2>
                <input className="login__email" type="text" placeholder="Your Email"></input>
                <input className="login__password" type="text" placeholder="Your Password"></input>
                <div className="login__btns">
                    <ZmCheckbox 
                        text="Keep me signed in"
                        checked={true} 
                        onChange={(e) => {console.log(e.target)}} />
                    <button className="login__signin" onClick={this.props.onClickSignin}> Sign In</button>
                </div>
                <p className="login__confirmation">
                    By signing in, I agree to the 
                    <a href={privacyURL} target="_blank" rel="noopener noreferrer">Privacy Polcy</a>
                    &nbsp;and&nbsp;
                    <a href={serviceURL} target="_blank" rel="noopener noreferrer">Terms of Service</a>
                </p>
                <footer className="login__footer">
                    <span className="login__back" onClick={this.props.onClickBack}>&lt;&nbsp;Back</span>
                    <a href={signupURL} className="login__signup" target="_blank" rel="noopener noreferrer">Sign Up Free</a>
                </footer>
            </div>
        )
    }
}

export default connect(
    null,
    dispatch => {
        return {
            onClickBack: () => dispatch( changeView(VIEWS.MAIN_LOGOUT) ),
            onClickSignin: () => {
                window.alert('you want to sign in');
            }
        }
    }
)(Login);