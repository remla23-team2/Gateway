const ROUTES = [
    {
        url: '/api/modelservice',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: process.env.MODEL_SERVICE_URL,
            changeOrigin: true,
            pathRewrite: {
                [`^/api/modelservice`]: '',
            },
        }
    },
]

exports.ROUTES = ROUTES;
