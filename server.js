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

//import * as admin from "firebase-admin";

const ENV = process.env.NODE_ENV || "development"
const DEFAULT_PORT = 8000
const DEFAULT_HOSTNAME = '127.0.0.1'

const firebase = require("./firebase")
const app = express()


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


module.exports = server
