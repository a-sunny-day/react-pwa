import React from 'react';
import ZmCheckbox from "components/CheckBox";
import {connect} from 'react-redux';
import {
    changeView,
    VIEWS,
} from 'store/actions'
import {addHyphenToMeetingId} from 'utils/index';

class JoinMeetingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meetingId: "",
            isMeetingIdValid: false,
            joinName: "",
            isJoinNameValid: false
        }
        this.onMeetingIdChange = this.onMeetingIdChange.bind(this);
        this.onJoinNameChange = this.onJoinNameChange.bind(this);
        this.onClickJoinMeeting = this.onClickJoinMeeting.bind(this);
        this.onInputKeyDown  = this.onInputKeyDown.bind(this);
    }
    onMeetingIdChange(e) {
        console.log(e.target.value);
        
        let id = e.target.value.toLowerCase();
        id = id.replace(/[-\s]/g, "");
        // if(/^[a-z]/.test(id)) {
        //     // person link name
        //     id = id.slice(0, 30); // person link name
        //     this.setState({
        //         meetingId: id
        //     })
        // } else 
        // first filter invalid input character
        if(/^\d{0,11}$/.test(id)) {
            this.setState({
                meetingId: addHyphenToMeetingId(id),
                isMeetingIdValid: /^\d{9,11}$/.test(id)
            })
        }
    }

    onJoinNameChange(e) {
        let name = e.target.value;
        if(name.length <= 70) {
            this.setState({
                joinName:  name,
                isJoinNameValid: name.length >= 0
            })
        }
    }

    onClickJoinMeeting() {
        if(this.state.isMeetingIdValid && this.state.isJoinNameValid) {
            let meetingId = this.state.meetingId.replace(/-/g, "");
            console.group("join meeting")
            console.log("meeting id is %s", meetingId);
            console.log("join name is %s", this.state.joinName);
            console.groupEnd();
            this.props.joinMeeting(meetingId, this.state.joinName);
        }
    }

    onInputKeyDown(e) {
        if(e.key === "Enter") {
            this.onClickJoinMeeting();
        }
    }

    render() {
        return (
            <div className="join">
                <h2 className="join__header">Join Meeting</h2>
                <div className="join__form">
                    <input 
                        type="text" 
                        className="join__meetingId" 
                        placeholder="Meeting ID"
                        value={this.state.meetingId}
                        onChange={this.onMeetingIdChange}
                        onKeyDown={this.onInputKeyDown}></input>
                    <input 
                        type="text" 
                        className="join__joinName" 
                        placeholder="Screen Name"
                        value={this.state.joinName}
                        onChange={this.onJoinNameChange}
                        onKeyDown={this.onInputKeyDown}></input>

                    <ZmCheckbox 
                        containerClass="join__connect-audio" 
                        text="Remember my name for future meetings"
                        checked={false} 
                        onChange={checked => {console.log(checked)}}/>
                    <ZmCheckbox 
                        containerClass="join__connect-audio" 
                        text="Do not connect to audio"
                        checked={false} 
                        onChange={checked => {console.log(checked)}}/>
                    <ZmCheckbox 
                        containerClass="join__off-video"
                        text="Turn off my video" 
                        checked={false} 
                        onChange={checked => {console.log(checked)}}/>

                </div>
                <footer>
                    <button 
                        disabled={!(this.state.isMeetingIdValid && this.state.isJoinNameValid)} 
                        className="join-btn"
                        onClick={this.onClickJoinMeeting}>Join</button>
                    <button className="cancel-btn" onClick={this.props.onCancel}>Cancel</button>
                </footer>
            </div>
        )
    }
}

// mainlogout -> join meeting
// mainlogin -> join meeing  
// we return back we must make sure where we come from
// is it a reason for us to introduce a router???
function mapDispatchToProps(dispatch) {
    return {
        onCancel: () => dispatch( changeView(VIEWS.MAIN_LOGOUT) ),
        joinMeeting: (meetingId, joinName) => {
            window.open(`https://www.zoom.us/wc/${meetingId}/join`, "_blank", "top=20,left=20,location=0")
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(JoinMeetingForm);