import * as actions from './actions'

let initState =  {
    currentView: actions.VIEWS.LOGIN,
    isLogging: false,
    userInfo: {
        token: null
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
        default:
            return state;
    }
}

