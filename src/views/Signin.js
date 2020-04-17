import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

// const privacyURL = 'https://zoom.us/privacy?onlycontent=1';
// const serviceURL = 'https://zoom.us/terms?onlycontent=1';
const signupURL = "https://zoom.com/signin";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frameHeight: 450
        }
        this.frameRef = React.createRef();
        this.onMessage = this.onMessage.bind(this);
    }

    componentDidMount() {
        let frame = this.frameRef.current;
        frame.addEventListener('message', this.onMessage);
        frame.addEventListener("load", (e) => {
            this.setState({
                frameHeight: e.target.contentDocument.documentElement.scrollHeight
            })
        })
    }
    
    componentWillUnmount() {
        this.frameRef.current.removeEventListener('message', this.onMessage);
    }

    onMessage(msg) {
        console.log('signin frame message: ', msg);
    }

    render() {
        return (
            <div className="signin">
                <h2 className="signin-header">Sign In</h2>
                <div className="signin-body" style={{height: this.state.frameHeight + "px"}}>
                    <iframe 
                        title="siginin-web"
                        ref={this.frameRef}
                        name="siginin-web"
                        className="signin-iframe"
                        src="https://zoomdev.us/signin"></iframe>
                </div>
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
        if(history.length === 1) {
            history.push({pathname: "/"})
        } else {
            history.goBack();
        }
    }
})
export default withRouter(connect( mapState, mapDispatch )(Login) );