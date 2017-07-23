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
import { schema } from './app/graphql/schema';
import { execute, subscribe } from 'graphql';

const ENV = process.env.NODE_ENV || "development"
const DEFAULT_PORT = 8000
const DEFAULT_HOSTNAME = '127.0.0.1'

const app = express()


/** 
	SET express variable
**/
app.set("env", ENV)

require("./mongoose").init(app)
require("./express").init(app)


/** 
	GraphQL
**/
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

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
	config.hostname || DEFAULT_HOSTNAME,
	() => {
		console.log(`SERVER is listening on port: ${config.port}`);
		console.log(`With environment: ${ENV.toLowerCase()}`);
	}
)


module.exports = server