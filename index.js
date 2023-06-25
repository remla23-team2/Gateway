const express = require('express')
const {setupLogging} = require("./logging")
const { ROUTES } = require('./routes')
const {setupProxies} = require("./proxy")

const app = express()
const port = 3000

setupLogging(app);
setupProxies(app, ROUTES)
app.get('/healthcheck', (req,res) => {
    return res.send('Healthy and alive!')
})

app.listen(port, () => {
    console.log(`gateway listening at http://localhost:${port}`)
})