let http = require('http');
let url = require('url');


// Basic HTTP
// http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     // res.end('New Message after installation Nodemon package');
//     let qry = url.parse(req.url, true).query;
//     res.write("Id: " + qry.id);
//     console.log(url.parse(req.url));
//     res.end();
// }).listen(5000);

const mongo = require('mongodb').MongoClient;
dbConnURL = 'mongodb://localhost:27017';
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let val = url.parse(req.url, true).query;
    
    mongo.connect(dbConnURL, async (err, db) => {
        if(err) throw err;

        // connect or create database
        let conn = db.db("users");
        console.log("Database Connected!");

        // get all existing Collections from the database
        // let collections = await conn.listCollections().toArray();
        // let collectionNames = collections.map(c => c.name);

        // if(!collectionNames.includes("teacherDetails")) {
        //     conn.createCollection("teacherDetails", (err, res1)=> {
        //         if(err) throw err;
        //         console.log(res1);
        //         console.log("Collection is created!");
        //         res.end();
        //     });
        // }

        // // create single document
        // conn.collection("newCollection").insertOne({name: "NEW", subject: "NEW SUBJECT"}, (err, res1) => {
        //     if(err) throw err;
        //     // response.end(JSON.stringify(res1, null, 3));
        //     console.log(res1);
        //     res.end(JSON.stringify(res1));
        // });
        
        // find one documents (OPTION 1 WORKS)
        let qry = url.parse(req.url, true).query;
        // let name = qry.name;
        // let age = qry.age;
        let noSQL = {};
        noSQL.name = qry.name;
        noSQL.age = parseInt(qry.age);
        // if(typeof name === "undefined" || name === null || name == "") {} else noSQL.name = name;
        // if(typeof subject === "undefined" || subject === null || subject == "") {} else noSQL.subject = subject;
        // conn.collection("userDetails").insertOne(noSQL, (err, res1) => {
        //     if(err) throw err;
        //     // response.end(JSON.stringify(res1, null, 3));
        //     console.log(res1);
        //     res.end(JSON.stringify(res1));
        // });

        conn.collection("userDetails").find(noSQL).toArray((err, res1) => {
            if(err) throw err;
            res.end(JSON.stringify(res1));
        });


        // (OPTION 2 WORKS)
        // conn.collection("newCollection").find({$or: [{name: val.name}, {subject: val.subject}]}, { projection: {_id: 0}}).toArray((err, res1) => {
        //     if (err) throw err;
        //     console.log(res1);
        //     res.end(JSON.stringify(res1,null,3));
        //     // db.close();
        // });
    });

}).listen(5000);