import React from 'react';

export default class LoginIframe extends React.Component {
    constructor(props) {
        super(props);
        this.frameRef = React.createRef();
    }
    componentDidMount() {
        window.frame = this.frameRef.current;
        console.log()
    }
    render() {
        return (
            <iframe 
                ref={this.frameRef}
                name="login-iframe"
                className="login-iframe"
                src="https://zoomdev.us/signin"></iframe>
        )
    }
}