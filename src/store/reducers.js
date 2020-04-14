import * as actions from './actions'

let initState =  {
    isLogging: false,
    userInfo: {
        valid: true,
        token: null,
        userName: ""
    }
};


export function appState(state = initState, action) {
    switch (action.type) {
        case actions.IS_LOGGING:
            return {
                ...state,
                isLogging: action.status
            }
        case actions.SET_USERINFO:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    ...action.userInfo
                }
            }
        default:
            return state;
    }
}

