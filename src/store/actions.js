
export const VIEWS = {
    MAIN_LOGIN: 'MAIN_LOGIN',
    MAIN_LOGOUT: 'MAIN_LOGOUT',
    LOGIN:  'LOGIN',
    JOIN_MEETING: 'JOIN_MEETING',
}

export const CHANGE_VIEW = 'CHANGE_VIEW';

/****************** actioin creators */
export function changeView(view) {
    return {
        type: CHANGE_VIEW,
        view: view
    }
}