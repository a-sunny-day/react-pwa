import {post, get} from "./http"
import {encodeURL} from "utils/index.js";
const dev_url_prefix = "/api";
// const dev_url_prefix = "/test";

function login() {
    let url = `${dev_url_prefix}/signin`;
    let body = {
        email: "christopher.wang@zoom.us",
        password: "123Zoomus",
        keep_me_signin: true,
        type: 100
    };
    let headers = {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "X-Requested-With": "XMLHttpRequest",
    }
    return post(url, headers, encodeURL(body));
}

function getUserInfo(login_result_url) {
    // let domain = getDomain(login_result_url);
    let api = "/mimo/login";
    let url = api;
    let headers = {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "X-Requested-With": "XMLHttpRequest",
        'X-Requested-From': 'ZOOM-EXTENSION',
    };
    let body = {
        snstype: 1,
        accesstoken: ""
    };

    return post(url, headers, encodeURL(body));
}

export function login_api() {
    return login()
        .then(response => {
            console.log("login api: ", response);
            if(response.ok) {
                return response.json();
            }
        })
        .then(data => {
            return getUserInfo(data.result)
        })
        .then(response => {
            console.log("get user info: ", response);
            return response
        })
        .catch(error => {
            console.error("login failed: ", error);
            return error;
        })
}
export function test_reddit_api() {
    return get(`${dev_url_prefix}/cpp.json`);
}