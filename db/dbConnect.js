const mongoose = require("mongoose");
const { MONGO_DB_URL } = require("../config");

function connectToMongoDB() {
    return mongoose.connect(MONGO_DB_URL)
}

function disconnectMongoDB() {
    return mongoose.connection.close();
}

module.exports = {
    dbConnect: connectToMongoDB,
    dbDisconnect: disconnectMongoDB
}