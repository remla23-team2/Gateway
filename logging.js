const morgan = require("morgan")

function setupLogging(app){
    app.use(morgan('combined'))
}

exports.setupLogging = setupLogging