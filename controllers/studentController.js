require('dotenv').config();
const mongo = require('mongodb').MongoClient;
let url = require('url');

const createStudent = (req, res) => {

}

const deleteStudent = (req, res) => {

}

const updateStudent = (req, res) => {

}

const getAllUsers = (req, res) => {
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
        console.log(typeof qry.name);
        if(qry.name!="" && qry.name!=undefined) noSQL.name = qry.name;
        if(qry.age!="" && qry.age!=undefined) noSQL.age = parseInt(qry.age);
        
        conn.collection("newCollection").find(noSQL).toArray((err, res1) => {
            if(err) throw err;
            res.send(res1);
        });
    });
}

module.exports = {
    createStudent,
    deleteStudent,
    updateStudent,
    getAllUsers
}