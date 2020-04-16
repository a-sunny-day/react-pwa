// input must be all numbers
export function addHyphenToMeetingId(input) {
    // pattern of meeting id: /^\d{3}\d{3,4}\d{3,4}$/
    // user can input the by hand 
    // or paste from clipboard
    input += "";
    input = input.replace(/-/g, "").split('');
    let length = input.length;
    if(length <= 3) {
        input = input;
    } else if(length <= 6) {
        input.splice(3, 0, "-");
    } else if(length <= 10) {
        input.splice(3, 0, '-');
        input.splice(7, 0, '-');
    } else if(length <= 11) {
        input.splice(3, 0, '-');
        input.splice(8, 0, '-');
    }
    return input.join("");
}

// export function isEmail(value) {
//     return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
// }
export function isEmail(value) {
    return /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}/.test(value);
}



export function encodeURL(dataObject) {
    // value is not an object 
    let result = [];
    for(let key in dataObject) {
        result.push(key + "=" + dataObject[key]);
    }
    return window.encodeURI( result.join("&") );
}

export function getDomain(url) {
    var result;
    var urlExec = /https:\/\/([^/]+)/ig.exec(url);
    if (urlExec && urlExec.length) {
        result = urlExec[0];
    }
    return result;
}


export function isInStandaloneMode() {
    return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}