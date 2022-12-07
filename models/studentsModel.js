const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('../db');

conn.connectThroughMongoose();

const studentSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"]
        },
        age: {
            type: Number,
            min: [18, "Age should be greater than 18yrs old"]
        }
    }
);

const Student = mongoose.model("studentMongooseCol", studentSchema);

module.exports = Student;