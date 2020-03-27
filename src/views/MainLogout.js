/**
 * this is shown if user hasn't loged in.
 * he can just 
 *  1. login
 *  2. join a meeting
 */

import React from 'react'
import ZoomLogo from 'images/logo@2x.png';
import {
    changeView,
    VIEWS,
} from 'store/actions'
import { connect } from 'react-redux';

function MainLogout(props) {
    return (
        <div className="main">
            {
                props.userInfo && props.userInfo.token ?
                <div className="header">
                    {props.userInfo.userName}
                </div> 
                : null
            }
            <div className="main--logo">
                <img src={ZoomLogo} alt="zoom video"/>
            </div>
            <div className="main--btns">
               <button 
                   className="main--btn main--btn-join" 
                   onClick={props.goToJoinMeeting}
                   >Join Meeting</button>

               <button 
                   className="main--btn main--btn-signin"
                   onClick={props.goToSignIn}
                   >Sign In</button>
            </div>
        </div>
    )
}

export default connect(
    state => {
        return {
            userInfo: state.userInfo
        }
    },
    dispatch => {
        return {
            goToJoinMeeting: () => dispatch( changeView(VIEWS.JOIN_MEETING) ),
            goToSignIn: () => dispatch( changeView(VIEWS.LOGIN))
        }
    }
)(MainLogout);
