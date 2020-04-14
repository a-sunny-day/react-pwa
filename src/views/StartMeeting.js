import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";

function StartMeeting(props) {
    return (
        <div class="start-meeting">
            start meeting
            <button>join with video</button>
            <button onClick={props.goBack}>join without video</button>
        </div>
    )
}
const mapDispatch = (dispatch, ownProps) => ({
    goBack() {
        let {history} = ownProps;
        history.goBack();
    }
})
export default withRouter( connect(null, mapDispatch)(StartMeeting) );