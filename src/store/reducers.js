import * as actions from './actions'

let initState =  {
    currentView: actions.VIEWS.JOIN_MEETING 
};


export function appState(state = initState, action) {
    switch (action.type) {
        case actions.CHANGE_VIEW:
            return {
                ...state,
                currentView: action.view
            };
        default:
            return state;
    }
}

