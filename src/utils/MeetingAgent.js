import { setIsDuringMeeting } from 'store/actions.js';
import { isInStandaloneMode } from "utils/index.js";
import reduxStoreInstance from 'store/index.js';


export default class MeetingAgent {
    constructor(props) {
        this.instance = null;
        this.timerHandler = null;
        this.timerInterval = 5000; // 5 seconds;
        // A browsing context is the environment in which a browser displays a Document
        // (normally a tab nowadays, but possibly also a window or a frame within a page).
        this.openedBrowsingContext = null; // start/join meeting will open another window/tab, we need to communicate to it
        this.hasReceiveStartMsg = false;
        this.windowName = "WebCliet_Meeting";
        this.windowFeatures = "top=20,left=20,titlebar=0,toolbar=0,location=0,status=0,menubar=0";
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            return new MeetingAgent();
        }
    }

    startMeeting(usePMI) {
        const url = "https://zoom.us/wc/**********/start";
        let features = isInStandaloneMode() ? this.windowFeatures : "";
        if (this.openedBrowsingContext == null || this.openedBrowsingContext.closed) {
            this.openedBrowsingContext = window.open(url, this.windowName, features);
            this.startListen();
        } else {
            this.openedBrowsingContext.focus();
        }

        if (this.openedBrowsingContext != null) {
            reduxStoreInstance.dispatch(setIsDuringMeeting(true));
        }
    }

    _joinMeeting(meeting) {
        const url = `https://zoom.us/wc/${meeting.meetingId}/join?name=${meeting.joinName}`;
        let features = isInStandaloneMode() ? this.windowFeatures : "";
        if (
            this.openedBrowsingContext == null ||
            this.openedBrowsingContext.closed ||
            !/wc\/\d{8,11}\/(join|start)/.test(this.openedBrowsingContext.location.pathname)
        ) {
            this.openedBrowsingContext = window.open(url, this.windowName, features);
            this.startListen();
        } else {
            this.openedBrowsingContext.focus();
        }

        if (this.openedBrowsingContext != null) {
            reduxStoreInstance.dispatch(setIsDuringMeeting(true));
        }
    }

    joinMeeting(meeting) {
        const url = `https://zoom.us/wc/${meeting.meetingId}/join?name=${meeting.joinName}`;
        if( isInStandaloneMode() ) {
            window.location.href = url;
        } else {
            window.open(url, "_blank");
        }
    }
    meetingEnded() {
        reduxStoreInstance.dispatch(setIsDuringMeeting(false));
        this.openedBrowsingContext = null;
    }

    handleMessage(event) {
        console.log("from opened window message: ", event.data, event.origin);
    }

    startListen() {
        window.addEventListener('message', this.handleMessage);
        // if(this.timerHandler) {
        //     clearInterval(this.timerHandler);
        // } else {
        //     this.timerHandler = setTimeout( () => {
        //         this.endListen();
        //     }, this.timerInterval);
        // }
    }

    endListen() {

    }

}