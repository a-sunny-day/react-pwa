import React from 'react';
import 'styles/app.scss';
import {connect} from 'react-redux';
// import MainLogout from "./MainLogout";
import JoinMeeting from "./JoinMeeting";
import MainLogout from './MainLogout';
import MainLogin from './MainLogin';
import Login from './Login'
import LoginIframe from './LoginIframe';
import PWAInstallPopup from "components/PWAInstallPopup/PWAInstallPopup.js"
import { isInStandaloneMode } from "utils/index.js"
import {
    VIEWS,
} from 'store/actions'

function App(props) {
    console.log(props)
    let CurrentView = null;
    switch(props.currentView) {
        case VIEWS.MAIN_LOGIN:  
            CurrentView = MainLogin;
            break;
        case VIEWS.JOIN_MEETING:
            CurrentView = JoinMeeting;
            break;
        case VIEWS.LOGIN:
            CurrentView = LoginIframe;
            break;
        case VIEWS.MAIN_LOGOUT:
        default:
            CurrentView = MainLogout;
    }

    return (
        <div className="app">
            <CurrentView />
            {
                !isInStandaloneMode() && <PWAInstallPopup />
            }
        </div>
    );
}

/** Even for the App component, if you do not connect it to redux,  it will not receive data from redux store */
export default connect(
    state => state,
)(App);

