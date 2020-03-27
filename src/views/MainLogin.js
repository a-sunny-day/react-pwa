import React from 'react';
import {connect} from "react-redux"
import {
    VIEWS,
    changeView,
} from 'store/actions'


class MainLogin extends React.Component {
    constructor(props) {
        super(props);
        this.timerHandler = null;
        this.state = {
            timeRemaining: 5
        }
    }
    componentDidMount() {
        this.timerHandler = setInterval(() => {
            if( this.state.timeRemaining > 0) {
                this.setState({
                    timeRemaining: this.state.timeRemaining - 1
                });
            } else {
                clearInterval(this.timerHandler);
                this.props.back();
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerHandler);
    }

    render() {
        return (
            <div>
                <h2>you have successfully logged in !!!!</h2>
                <p>after {this.state.timeRemaining} s, you will be redirect back</p>
            </div>
        )
    }
}

export default connect(
    null,
    dispatch => {
        return {
            back: () => dispatch( changeView(VIEWS.MAIN_LOGOUT) ),
        }
    }
)(MainLogin);
