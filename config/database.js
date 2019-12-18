"use strict";

require("dotenv").config();
let Database = {},
    Promise = require("bluebird");

Database.mongodb = {
    uri: process.env.MONGODB_URI,
    options: {
        native_parser: true,
        socketTimeoutMS: 0,
        keepAlive: true,
        reconnectTries: 20,
        poolSize: 5,
        useMongoClient: true,
        promiseLibrary: Promise,
    },
    optionsDeprecated: {
        db: {
            native_parser: true
        },
        server: {
            poolSize: 5,
            socketOptions: {
                keepAlive: 120*1000,
                socketTimeoutMS: 0,
                connectionTimeout: 0
            }
        },
    }
};

module.exports = Database;