const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
const mongo = require('mongodb').MongoClient;
let url = require('url');

// app.use(cors());
// app.use(helmet());

//Routes

// API Link: http://localhost:5000/show
app.get('/show', (req, res) => {
    res.send("This is for Show Details Route");
});

// Login
// Logout
// Add User // http://localhost:5000/createUser
app.get('/createUser', (req, res) => {
    // res.send("This is for creating new user details");
    mongo.connect(process.env.DB_CONN, async (err, db) => {
        if(err) throw err;

        // connect or create database
        let conn = db.db("students");
        console.log("Database Connected!");
        
        // find one documents (OPTION 1 WORKS)
        let qry = url.parse(req.url, true).query;
        // let name = qry.name;
        // let age = qry.age;
        let noSQL = {};
        if(qry.name!="") noSQL.name = qry.name;
        if(qry.age!="") noSQL.age = parseInt(qry.age);

        conn.collection("newCollection").insertOne(noSQL, (err, res1) => {
            if(err) throw err;
            res.send(res1);
        });

    });
});
// Edit User // http://localhost:5000/editUser
app.get('/updateUser', (req, res) => {
    // res.send("This is for updating existing user details");
    mongo.connect(process.env.DB_CONN, async (err, db) => {
        if(err) throw err;

        // connect or create database
        let conn = db.db("students");
        console.log("Database Connected!");
        
        // find one documents (OPTION 1 WORKS)
        let qry = url.parse(req.url, true).query;
        // let name = qry.name;
        // let age = qry.age;
        let noSQL = {};
        if(qry.name!="") noSQL.name = qry.name;
        if(qry.age!="") noSQL.age = parseInt(qry.age);

        conn.collection("newCollection").updateOne({name: noSQL.name}, {$set: {age: noSQL.age}}, (err, res1) => {
            if(err) throw err;
            res.send(res1);
        });

    });
});
// Delete User // http://localhost:5000/deleteUser
app.get('/deleteUser', (req, res) => {
    // res.send("This is for deleting user details");
    mongo.connect(process.env.DB_CONN, async (err, db) => {
        if(err) throw err;

        // connect or create database
        let conn = db.db("students");
        console.log("Database Connected!");
        
        // find one documents (OPTION 1 WORKS)
        let qry = url.parse(req.url, true).query;
        // let name = qry.name;
        // let age = qry.age;
        let noSQL = {};
        if(qry.name!="") noSQL.name = qry.name;

        conn.collection("newCollection").deleteOne({name: noSQL.name}, (err, res1) => {
            if(err) throw err;
            res.send(res1);
        });

    });
});
// Show Users // http://localhost:5000/showUser
app.get('/showUser', (req, res) => {
    // res.send("This is for showing all user details");
    mongo.connect(process.env.DB_CONN, async (err, db) => {
        if(err) throw err;

        // connect or create database
        let conn = db.db("students");
        console.log("Database Connected!");
        
        // find one documents (OPTION 1 WORKS)
        let qry = url.parse(req.url, true).query;
        // let name = qry.name;
        // let age = qry.age;
        let noSQL = {};
        if(qry.name!="") noSQL.name = qry.name;
        if(qry.age!="") noSQL.age = parseInt(qry.age);
        

        conn.collection("newCollection").find(noSQL).toArray((err, res1) => {
            if(err) throw err;
            res.send(res1);
        });

    });
});

// API Link: http://localhost:5000/dinesh/
app.get('/*', (req, res) => {
    return res.send("Invalid Access Route");
});

app.listen(process.env.BE_PORT, ()=> {
    console.log("Server is listening to Port Number: " + process.env.BE_PORT);
});