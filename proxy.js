const { createProxyMiddleware} = require('http-proxy-middleware')

function setupProxies(app, routes){
    routes.forEach(r => {
        app.use(r.url, createProxyMiddleware(r.proxy))
    })
}

exports.setupProxies = setupProxies