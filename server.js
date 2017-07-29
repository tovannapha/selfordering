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

import * as admin from "firebase-admin";

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
	Firebase
**/
var serviceAccount = require("./selfordering-firebase.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://selfordering-cafc3.firebaseio.com"
});

var checkauth = function (req, res, next) {

var TOKEN = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg4NWY3MGUyYTcyNDg0MTk5NWI2YWMxOGQwZDdmNjJkNDEwODBlMzcifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2VsZm9yZGVyaW5nLWNhZmMzIiwibmFtZSI6IlRPeHggVE94eCDjg4jjg7zjg4jjg7wiLCJwaWN0dXJlIjoiaHR0cHM6Ly9zY29udGVudC54eC5mYmNkbi5uZXQvdi90MS4wLTEvcDEwMHgxMDAvMTIyNDY3ODZfMTE5MDkxODUyMDkyMjk0N183NDEyMzI2NTc4NjI2NTI0NDY3X24uanBnP29oPTQ3NTVlYmM3ZTFlZjNiYzIzMzZkOGVkYTI1Yzg3ZDMyJm9lPTVBMDhBMTczIiwiYXVkIjoic2VsZm9yZGVyaW5nLWNhZmMzIiwiYXV0aF90aW1lIjoxNTAxMjUyOTM4LCJ1c2VyX2lkIjoidzc3RENGZkxNaVhBYksyR0tPQUxxS0lXZERNMiIsInN1YiI6Inc3N0RDRmZMTWlYQWJLMkdLT0FMcUtJV2RETTIiLCJpYXQiOjE1MDEyNTI5MzgsImV4cCI6MTUwMTI1NjUzOCwiZW1haWwiOiJ0b192YW5uYXBoYTRAeWFob28uY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImZhY2Vib29rLmNvbSI6WyIxNzg2NTA0NzExMzY0MzIyIl0sImVtYWlsIjpbInRvX3Zhbm5hcGhhNEB5YWhvby5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJmYWNlYm9vay5jb20ifX0.j2QqMurBnkt-_G9_B2DBiGPczq1dbksXMtV3rUexq6Ns_ZgrClrx68_JpgDAKqioi6hL3t9Aa9V6d6Cp8Wu3wM6KyZOkKYIXKxweODCLW2WjH1JPd2U0_uC4bO0WT9u24ZMcXos_DdX378rkiOn8f89lUQQfZhafwVoHcO6Ycy1FFZHojS17ereCudECUo12kYCphwoPpASgQpTbUEAPwNws5_JB1fhhD9FZ78BQ_2mGZs3ri2iKmd8kOpFdZ1AZvBOb2wBN9GPKowQ-3oLUfkbs3KnS-buvePoRq5tlBZ0PtYs-V58_L5etLGYT43BoLuDoFDhHwpeToE5bEYV-YA"

admin.auth().verifyIdToken(TOKEN)
  .then(function(decodedToken) {
    var uid = decodedToken.uid;
    console.log(decodedToken)
		//next(decodedToken);
  }).catch(function(error) {
    console.log(error)
  });

	next();
};

app.use(checkauth);

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
	() => {
		console.log(`SERVER is listening on port: ${config.port}`);
		console.log(`With environment: ${ENV.toLowerCase()}`);
	}
)


module.exports = server