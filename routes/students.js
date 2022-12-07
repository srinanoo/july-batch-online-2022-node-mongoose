const express = require('express');
const { type } = require('os');
const router = express.Router();

const StudentsController = require('../controllers/studentController');

// // http://localhost:5000/api/v1/students/showUser
router.get("/showUser", StudentsController.getAllUsers);

// router.get("/showAll", (req, res) => {
//     mongo.connect(process.env.DB_CONN, async (err, db) => {
//         if(err) throw err;

//         // connect or create database
//         let conn = db.db("students");
//         console.log("Database Connected!");
        
//         // find one documents (OPTION 1 WORKS)
//         let qry = url.parse(req.url, true).query;
//         // let name = qry.name;
//         // let age = qry.age;
//         let noSQL = {};
//         console.log(typeof qry.name);
//         if(qry.name!="" && qry.name!=undefined) noSQL.name = qry.name;
//         if(qry.age!="" && qry.age!=undefined) noSQL.age = parseInt(qry.age);
        

//         conn.collection("newCollection").find(noSQL).toArray((err, res1) => {
//             if(err) throw err;
//             res.send(res1);
//         });
//     });
// });

// // http://localhost:5000/api/v1/students/updateStudent
router.get("/updateStudent", StudentsController.updateStudent);

// router.get("/updateStudent", (req, res) => {
//     mongo.connect(process.env.DB_CONN, async (err, db) => {
//         if(err) throw err;

//         // connect or create database
//         let conn = db.db("students");
//         console.log("Database Connected!");
        
//         // find one documents (OPTION 1 WORKS)
//         let qry = url.parse(req.url, true).query;
//         // let name = qry.name;
//         // let age = qry.age;
//         let noSQL = {};
//         console.log(typeof qry.name);
//         if(qry.name!="" && qry.name!=undefined) noSQL.name = qry.name;
//         if(qry.age!="" && qry.age!=undefined) noSQL.age = parseInt(qry.age);
        

//         conn.collection("newCollection").updateOne(noSQL).toArray((err, res1) => {
//             if(err) throw err;
//             res.send(res1);
//         });
//     });
// });

// // http://localhost:5000/api/v1/students/deleteStudent
router.get("/deleteStudent", StudentsController.deleteStudent);

// router.get("/deleteStudent", (req, res) => {
//     mongo.connect(process.env.DB_CONN, async (err, db) => {
//         if(err) throw err;

//         // connect or create database
//         let conn = db.db("students");
//         console.log("Database Connected!");
        
//         // find one documents (OPTION 1 WORKS)
//         let qry = url.parse(req.url, true).query;
//         // let name = qry.name;
//         // let age = qry.age;
//         let noSQL = {};
//         console.log(typeof qry.name);
//         if(qry.name!="" && qry.name!=undefined) noSQL.name = qry.name;
//         if(qry.age!="" && qry.age!=undefined) noSQL.age = parseInt(qry.age);
        

//         conn.collection("newCollection").deleteOne(noSQL).toArray((err, res1) => {
//             if(err) throw err;
//             res.send(res1);
//         });
//     });
// });

// // http://localhost:5000/api/v1/students/createStudent
router.get("/createStudent", StudentsController.createStudent);

// router.get("/createStudent", (req, res) => {
//     mongo.connect(process.env.DB_CONN, async (err, db) => {
//         if(err) throw err;

//         // connect or create database
//         let conn = db.db("students");
//         console.log("Database Connected!");
        
//         // find one documents (OPTION 1 WORKS)
//         let qry = url.parse(req.url, true).query;
//         // let name = qry.name;
//         // let age = qry.age;
//         let noSQL = {};
//         console.log(typeof qry.name);
//         if(qry.name!="" && qry.name!=undefined) noSQL.name = qry.name;
//         if(qry.age!="" && qry.age!=undefined) noSQL.age = parseInt(qry.age);
        

//         conn.collection("newCollection").insertOne(noSQL).toArray((err, res1) => {
//             if(err) throw err;
//             res.send(res1);
//         });
//     });
// });

module.exports = router;