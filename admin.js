const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');

// app.use(cors());
// app.use(helmet());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes Students

// Students
const students = require('./routes/students');
app.use('/api/v1/students', students); // http://localhost:5000/api/v1/students/*

// Class
const classes = require('./routes/class');
app.use('/api/v1/class', classes); // http://localhost:5000/api/v1/class/*

// Teachers
const teachers = require('./routes/teachers');
app.use('/api/v1/teachers', teachers); // http://localhost:5000/api/v1/teachers/*

// Courses
const courses = require('./routes/courses');
app.use('/api/v1/courses', courses); // http://localhost:5000/api/v1/courses/*


app.get('/*', (req, res) => {
    return res.send("Invalid Access Route");
});

app.listen(process.env.BE_PORT, ()=> {
    console.log("Server is listening to Port Number: " + process.env.BE_PORT);
});