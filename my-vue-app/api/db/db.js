const mongoose = require('mongoose');
require('dotenv').config();
const URL_DB = process.env.MONGODB_URI;

mongoose.connect(URL_DB);

const database = mongoose.connection;

module.exports = database;