
export function post(url, headers, body) {
    return window.fetch(url, {
        method: "POST",
        headers: headers,
        cache: "default",
        body: body
    })
}

export function get(url, body) {
    return window.fetch(url, {
        method: 'GET',
        body: body
    })
}