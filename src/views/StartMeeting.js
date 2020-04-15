import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import ZmCheckbox from 'components/CheckBox';

function StartMeeting(props) {
    let pmi = "***-****-****";
    let text = "Use My Personal Meeting ID (PMI) " + pmi;

    return (
        <div className="start">
            <div className="start-header">
                Start Meeting
            </div>

            <div className="btns btns-start">
                <button className="btn btn-block btn-start-with-video">Start With Video</button>
                <button className="btn btn-block btn-start-without-video"onClick={null}>Start Without Video</button>
                <div className="start-checkbox">
                    <ZmCheckbox
                        text={text}
                        checked={true} 
                        containerClass="start-use-pmi"
                        onChange={(e) => {console.log(e.target)}} />
                </div>
            </div>

            <div className="start-footer">
                <a href="#" className="start-cancel" onClick={props.goBack}>Cancel</a>
            </div>
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