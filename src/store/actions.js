export const IS_LOGGING = 'IS_LOGGING';
export const SET_USERINFO = 'SET_USERINFO';
export const IS_DURING_MEETING= "IS_DURING_MEETING";

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
