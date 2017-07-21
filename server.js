'use strict'

const ENV = process.env.NODE_ENV || "development"
const DEFAULT_PORT = 8000
const DEFAULT_HOSTNAME = '127.0.0.1'

const http = require("http")
const express = require("express")
const app = express()
const config = require("./config/index")

const model = require("./app/models/models")

/** 
	SET express variable
**/
app.set("env", ENV)

require("./express").init(app)
require("./mongoose").init(app)


/**
	START server
**/
let server = http.createServer(app)
server.listen(
	config.port || DEFAULT_PORT, 
	config.hostname || DEFAULT_HOSTNAME,
	() => {
		console.log(`SERVER is listening on port: ${config.port}`);
		console.log(`With environment: ${ENV.toLowerCase()}`);
	}
)


module.exports = server