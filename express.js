/*
	initialize expressjs and core middlewares
*/

'use strict'

const bodyParser = require("body-parser")
const helmet = require("helmet")
const config = require("./config/index")

module.exports.init = (app) => {

	app.use(helmet())
	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(bodyParser.json())

}