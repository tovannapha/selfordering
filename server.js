'use strict'
import http from "http"
import config from "./config/index"
/*
	GraphQL
*/
import express from 'express';
import {
	graphqlExpress,
	graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { schema } from './app/graphql';
import { execute, subscribe } from 'graphql';
import { formatError } from 'apollo-errors';


const ENV = process.env.NODE_ENV || "development"
const DEFAULT_PORT = 3000
const DEFAULT_HOSTNAME = '127.0.0.1'

const firebase = require("./firebase")
const app = express()
const cluster = require("cluster")


app.use('*', cors());; 


/*
	NODEJS Cluster
*/
if(cluster.isMaster) {
	const numWorkers = require("os").cpus().length	// GET number of cpu' cores
	console.log(`Master ${process.pid} is running`)

	// Fork workers
	console.log(`Master cluster setting up ${numWorkers} workers`)
	for(var i = 0; i < numWorkers; i++) {
		cluster.fork()
	}

	// Listen for exit event (Worker died)
	cluster.on("exit", (worker, code, signal) => {
		console.log(`Worker ${worker.process.pid} died with CODE ${code} and SIGNAL ${signal}`);
		console.log("Create new worker")
		cluster.fork()
	})
}

else {


	/** 
		SET express variable
	**/
	app.set("env", ENV)

	require("./mongoose").init(app)
	require("./express").init(app)



	/** 
		Firebase
	**/
	// CHECK for valid token
	app.use(firebase.checkToken)



	/** 
		GraphQL
	**/
	app.use('/graphql', bodyParser.json(), graphqlExpress((req) => ({
		formatError,
		schema,
		context: req.user
	})));

	app.use('/graphiql', graphiqlExpress({
		endpointURL: '/graphql',
		subscriptionsEndpoint: `ws://localhost:4000/subscriptions`
	}));


	/**
		START server
	**/
	let server = http.createServer(app)
	server.listen(
		config.port || DEFAULT_PORT,
		() => {
			console.log(`SERVER is listening on port: ${config.port}`);
			console.log(`With environment: ${ENV.toLowerCase()}`);
		}
	)


	module.exports = app

}
