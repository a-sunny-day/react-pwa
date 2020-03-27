
export const VIEWS = {
    MAIN_LOGIN: 'MAIN_LOGIN',
    MAIN_LOGOUT: 'MAIN_LOGOUT',
    LOGIN:  'LOGIN',
    JOIN_MEETING: 'JOIN_MEETING',
}

export const CHANGE_VIEW = 'CHANGE_VIEW';
export const IS_LOGGING = 'IS_LOGGING';
export const SET_USERINFO = 'SET_USERINFO';

/****************** action creators */
export function changeView(view) {
    return {
        type: CHANGE_VIEW,
        view: view
    }
}

export function setIsLogining(status) {
    return {
        type: IS_LOGGING,
        status: status
    }
}

export function setUserInfo(info) {
    return {
        type: SET_USERINFO,
        userInfo: info
    }
}

/************* async action creator */

export function login(email, password) {
    return dispatch => {
        dispatch( setIsLogining(true) );
        return fetch('https://www.reddit.com/r/cpp.json')
            .then(
                response => {
                    dispatch(setIsLogining(false));
                    dispatch( changeView(VIEWS.MAIN_LOGIN) );
                    console.group('login')
                    console.log('email: ', email);
                    console.log('password: ', password);
                    console.groupEnd();
                    dispatch( setUserInfo({token: "token", userName: "This is my name"}) );
                    return response.json();
                },
                error => {
                    dispatch(setIsLogining(false));
                    console.log(error);
                })
            .then(json => {
                return json.data.dist;
            })
    }
}