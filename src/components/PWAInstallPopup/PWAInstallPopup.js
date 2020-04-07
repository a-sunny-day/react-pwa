import React from 'react';
import "./install-popup.scss"

class PWAInstallPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.browserInstallEvent = null;
        this.onClick = this.onClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    componentDidMount() {
        window.addEventListener("beforeinstallprompt", (e) => {
            console.log("pwa event: beforeinstallprompt");
            this.browserInstallEvent = e;
            this.setState({
                show: true,
            });
        });
    }
    onClick() {
       
        this.browserInstallEvent.prompt();
        this.browserInstallEvent.userChoice.then(
            choice => {
                // either "accepted" or "dismissed"
                // {outcome: "dismissed", platform: ""} in chrome
                console.log('pwa prompt: user choice -- ', choice);
                if(choice.outcome === "accepted") {
                    this.setState({
                        show: false
                    });
                }
            }
        )
    }
    onClose(e) {
        e.stopPropagation();
        this.setState({
            show: false
        })
    }
    render() {
        return this.state.show ? (
            <div className="install-popup" onClick={this.onClick}>
                <span>You can add me to desktop now.</span>
                <span className="close" onClick={this.onClose}>X</span>
            </div>
        ) : null
    }
}

export default PWAInstallPopup;