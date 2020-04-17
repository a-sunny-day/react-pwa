/**
 * this is shown if user hasn't loged in.
 * he can just 
 *  1. login
 *  2. join a meeting
 */

import React from 'react'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

function MainLogout(props) {
    return (
        <div className="home">
            {
                props.userInfo.valid ?
                <div className="header">
                    {props.userInfo.userName}
                </div> 
                : null
            }
            <div className="home-logo"></div>


            <div className="btns-home">

               { 
                    props.userInfo.valid && (
                        <button 
                            className="btn btn-block btn-home-start"
                            onClick={props.goToStartMeeting}
                            >Start Meeting</button>
                    )
               }

               <button 
                   className="btn btn-block btn-home-join"
                   onClick={props.goToJoinMeeting}
                   >Join Meeting</button>

               {
                   !props.userInfo.valid && (
                    <button 
                        className="btn btn-block btn-home-signin"
                        onClick={props.goToSignIn}
                        >Sign In</button>
                   )
               }

                
            </div>
        </div>
    )
}


let mapState = (state)=> ({userInfo: state.userInfo})
let mapDispatch = (dispatch, ownProps) => ({
    goToJoinMeeting: () => {
        let {history} = ownProps;
        history.push({pathname: '/join'});
    },
    goToSignIn: () => {
        let {history} = ownProps;
        history.push({pathname: '/signin'});
    },
    goToStartMeeting: () => {
        let {history} = ownProps;
        history.push({pathname: '/start'});
    }
})

export default withRouter( connect(mapState, mapDispatch)(MainLogout) );
