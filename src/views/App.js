import React from 'react';
import 'styles/app.scss';
import {connect} from 'react-redux';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';

import JoinMeeting from "./JoinMeeting";
import Home from './Home';
import Signin from './Signin'
import StartMeeting from './StartMeeting'
import LoginIframe from './LoginIframe';
import PWAInstallPopup from "components/PWAInstallPopup/PWAInstallPopup.js"
import { isInStandaloneMode } from "utils/index.js"


function App(props) {
    console.log(props)

    return (
        <>
            <div className="app">
                <Switch>
                    <Route path="/signin" >
                        <Signin />
                    </Route>

                    <Route path="/join">
                        <JoinMeeting />
                    </Route>

                    <Route path="/start">
                        <StartMeeting />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
            {
                !isInStandaloneMode() && <PWAInstallPopup />
            }
        </>
    );
}

/** Even for the App component, if you do not connect it to redux,  it will not receive data from redux store */
export default connect(
    state => state,
)(App);

