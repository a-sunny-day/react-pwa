import * as actions from './actions'

let initState =  {
    isDuringMeeting: false,
    userInfo: {
        valid: false,
        token: null,
        userName: "",
    },
    lastJoinName: "",
    meetingHistoryList: []
};


export function appState(state = initState, action) {
    switch (action.type) {
        case actions.SET_USERINFO:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    ...action.userInfo
                }
            }
        case actions.IS_DURING_MEETING:
            return {
                ...state,
                isDuringMeeting: action.flag
            }
        default:
            return state;
    }
}

