import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MeetingAgent from "utils/MeetingAgent.js";
import ZmCheckbox from "components/Checkbox/Checkbox";
import { addHyphenToMeetingId } from 'utils/index';

function JoinMeeting({ onCancel, joinMeeting }) {
    const [meetingId, setMeetingId] = useState("");
    const [joinName, setJoinName] = useState("");

    let isMeetingIdValid = /^\d{9,11}$/.test(meetingId);
    let isJoinNameValid = joinName.trim().length > 0 && joinName.trim().length <= 70;

    const onMeetingIdChange = (e) => {
        let id = e.target.value.toLowerCase();
        id = id.replace(/[-\s]/g, "");
        // first filter invalid input character
        if (/^\d{0,11}$/.test(id)) {
            setMeetingId(id);
        }
    }

    const onJoinNameChange = (e) => {
        let name = e.target.value;
        if (name.length <= 70) {
            setJoinName(name);
        }
    }

    const onClickJoinMeeting = () => {
        if (isMeetingIdValid && isJoinNameValid) {
            let id = meetingId.replace(/-/g, "");
            console.group("join meeting")
            console.log("meeting id is %s", meetingId);
            console.log("join name is %s", joinName);
            console.groupEnd();
            joinMeeting(id, joinName);
        }
    }

    const onInputKeyDown = (e) => {
        if (e.key === "Enter") {
            onClickJoinMeeting();
        }
    }

    return (
        <div className="join">
            <h2 className="join-header">Join Meeting</h2>
            <div className="join-form">
                <input
                    type="text"
                    className="join-meetingId"
                    placeholder="Meeting ID"
                    value={addHyphenToMeetingId(meetingId)}
                    onChange={onMeetingIdChange}
                    onKeyDown={onInputKeyDown}></input>
                <input
                    type="text"
                    className="join-joinName"
                    placeholder="Screen Name"
                    value={joinName}
                    onChange={onJoinNameChange}
                    onKeyDown={onInputKeyDown}></input>

                <ZmCheckbox
                    containerClass="join-connect-audio"
                    text="Remember my name for future meetings"
                    checked={false}
                    onChange={checked => { console.log(checked) }} />
                <ZmCheckbox
                    containerClass="join-connect-audio"
                    text="Do not connect to audio"
                    checked={false}
                    onChange={checked => { console.log(checked) }} />
                <ZmCheckbox
                    containerClass="join-off-video"
                    text="Turn off my video"
                    checked={false}
                    onChange={checked => { console.log(checked) }} />

            </div>
            <footer>
                <button
                    disabled={!(isMeetingIdValid && isJoinNameValid)}
                    className="btn-join"
                    onClick={onClickJoinMeeting}>Join</button>
                <button className="btn-cancel" onClick={onCancel}>Cancel</button>
            </footer>
        </div>
    )
}

JoinMeeting.propTypes = {
    onCancel: PropTypes.func.isRequired,
    joinMeeting: PropTypes.func.isRequired
};


function mapDispatchToProps(dispatch, ownProps) {
    return {
        onCancel: () => {
            const { history } = ownProps;
            if (history.length === 1) {
                history.push({ pathname: "/" })
            } else {
                history.goBack();
            }
        },
        joinMeeting: (meetingId, joinName) => {
            MeetingAgent.getInstance().joinMeeting({ meetingId, joinName });
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(JoinMeeting));