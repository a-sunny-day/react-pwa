const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://www.zoomdev.us',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            },
            onProxyReq: function(req) {
                console.log('url', req.path)
                console.log('body', req.body)
            }
        })
    );
    app.use(
        '/mimo',
        createProxyMiddleware({
            target: 'https://devb.zoomdev.us',
            changeOrigin: true,
            onProxyReq: function(req) {
                console.log('url', req.path)
                console.log('body', req.body)
            }
        })
    );
    
    app.use(
        '/test',
        createProxyMiddleware({
            target: 'https://www.reddit.com/r',
            changeOrigin: true,
            pathRewrite: {
                "^/test": ''
            },
            onProxyReq: function(req) {
                console.log('url', req.path)
                console.log('body', req.body)
            }
        })
    )
}