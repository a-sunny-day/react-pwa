import { produce } from 'immer';
import * as actions from './actions'

const initState =  {
    isDuringMeeting: false,
    userInfo: {
        valid: false,
        token: null,
        userName: "",
    },
    lastJoinName: "",
    meetingHistoryList: []
};

const rootReducer = produce( (state = initState, action) => {
    switch (action.type) {
        case actions.SET_USERINFO:
            state.userInfo = action.userInfo;
            break;
        case actions.IS_DURING_MEETING:
            state.isDuringMeeting = action.flag;
            break;
        default:
            return state;
    }
});

export default rootReducer;
