import * as actions from './actions'

let initState =  {
    currentView: actions.VIEWS.LOGOUT,
    isLogging: false,
    userInfo: {
        token: null,
        userName: ""
    }
};


export function appState(state = initState, action) {
    switch (action.type) {
        case actions.CHANGE_VIEW:
            return {
                ...state,
                currentView: action.view
            };
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

