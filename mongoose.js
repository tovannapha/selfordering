'use strict';

const mongoose = require('mongoose');
const config = require('./config/index');

mongoose.Promise = global.Promise	// to prevent deprecation warning

module.exports.init = (app) => {

	mongoose.connect(config.mongodb.uri, {useMongoClient: true})
		.then(() => console.log("SUCESS connecting DB "))
		.catch(() => console.log("FAILED connecting DB"))

	// If Node process end then cleanup the connection
	process.on('SIGINT', cleanup);
	process.on('SIGTERM', cleanup);
	process.on('SIGHUP', cleanup);

	return mongoose;
}

function cleanup() {
	mongoose.connection.close(function () {
		console.log('CLOSE DB  & STOP running app');
		process.exit(0);
	});
}
