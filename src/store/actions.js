import {
    login_api,
} from "services/apis.js";

export const VIEWS = {
    MAIN_LOGIN: 'MAIN_LOGIN',
    MAIN_LOGOUT: 'MAIN_LOGOUT',
    LOGIN:  'LOGIN',
    JOIN_MEETING: 'JOIN_MEETING',
}

export const CHANGE_VIEW = 'CHANGE_VIEW';
export const IS_LOGGING = 'IS_LOGGING';
export const SET_USERINFO = 'SET_USERINFO';
export const IS_DURING_MEETING= "is_during_meeting";

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

export function setIsDuringMeeting(flag) {
    return {
        type: IS_DURING_MEETING,
        flag: flag,
    }
}

/************* async action creator */

export function login(email, password) {
    return dispatch => {
        dispatch( setIsLogining(true) );
        // return fetch('cpp.json')
        return login_api()
            // .then(
            //     response => {
            //         dispatch(setIsLogining(false));
            //         dispatch( changeView(VIEWS.MAIN_LOGIN) );
            //         console.group('login')
            //         console.log('email: ', email);
            //         console.log('password: ', password);
            //         console.groupEnd();
            //         dispatch( setUserInfo({token: "token", userName: "This is my name"}) );
            //         console.log(response);
            //         return response.json();
            //     },
            //     error => {
            //         dispatch(setIsLogining(false));
            //         console.log(error);
            //     })
            // .then(json => {
            //     console.log(json);
            //     return json && json.data && json.data.dist;
            // })
    }
}