'use strict';

const ENV = process.env.NODE_ENV || 'development';
const config = require('./' + ENV.toLowerCase() + '/' + ENV.toLowerCase());

module.exports = config;