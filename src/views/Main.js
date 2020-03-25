/**
 * this is shown if user hasn't loged in.
 * he can just 
 *  1. login
 *  2. join a meeting
 */

import React from 'react'
import ZoomLogo from 'images/logo@2x.png';
export default function(props) {

    return (
        <div className="main">
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
