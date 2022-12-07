const express = require('express');
const router = express.Router();
require('dotenv').config();
const conn = require('../db');

router.post("/showAll", (req, res) => {
    conn.connectToStudentsDB((err) => {
        if(err) throw err;

        console.log(req.body); // used to retrieve POST method data
        
        let qry = req.body;
        let noSQL = {};
        console.log(typeof qry.name);
        if(qry.name!="" && qry.name!=undefined) noSQL.name = qry.name;
        if(qry.age!="" && qry.age!=undefined) noSQL.age = parseInt(qry.age);
        

        conn.getDB().collection("newCollection").find(noSQL).toArray((err, res1) => {
            if(err) throw err;
            res.send(res1);
        });
    });
});

router.get("/createStudent/:name/:age", (req, res) => {
    conn.connectToStudentsDB((err) => {
        if(err) throw err;

        console.log(req.params); // used to retrieve POST method data
        
        let qry = req.params;
        let noSQL = {};
        console.log(typeof qry.name);
        if(qry.name!="" && qry.name!=undefined) noSQL.name = qry.name;
        if(qry.age!="" && qry.age!=undefined) noSQL.age = parseInt(qry.age);
        

        conn.getDB().collection("newCollection").insertOne(noSQL, (err, res1) => {
            if(err) throw err;
            res.send(res1);
        });
    });
});

module.exports = router;