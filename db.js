require('dotenv').config();
const mongo = require('mongodb').MongoClient;
const mongoose = require('mongoose');
let conn;

module.exports = {
    connectToStudentsDB: function( callback ) {
        mongo.connect(process.env.DB_CONN, (err, db) => {
            conn = db.db("students");
            return callback(err);
        });
    },
    connectToSchoolsDB: function( callback ) {
        mongo.connect(process.env.DB_CONN, (err, db) => {
            conn = db.db("schools");
            return callback(err);
        });
    },
    getDB: function() {
        return conn;
    }
}

module.exports = {
    connectThroughMongoose() {
        mongoose.connect(process.env.DB_CONN_MONGOOSE);

        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "connection error..."));
        db.once("open", function() {
            console.log("DB Connected Successfully!");
        });
    }
}