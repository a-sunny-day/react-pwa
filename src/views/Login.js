import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ""
        }

        render() {
            return (
                <div className="login">
                    <h2 className="login--title">Sign In</h2>
                    <input className="login--email" type="text" placeholder="Your Email"></input>
                    <input className="login--password" type="text" placeholder="Your Password"></input>
                </div>
            )
        }
    }
}