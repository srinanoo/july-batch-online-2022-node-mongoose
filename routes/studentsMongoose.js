const express = require('express');
const { type } = require('os');
const router = express.Router();

const StudentModel = require('../models/studentsModel');

router.post('/createStudent', async (req, res) => {
    const Student = new StudentModel(req.body);

    let out = [];

    try {
        await Student.save();
        
        out[0] = {"msg": "Success"};
        out[1] = {"output": Student};
        out[2] = {"error": ""};

        res.json(out);
    } catch (err) {
        // console.log(err);
        // res.json(err);

        out[0] = {"msg": ""};
        out[1] = {"output": ""};

        allErrors = [];

        for(temp in err.errors) {
            console.log(temp);
            singleError = {};
            singleError.field = temp;
            singleError.message = err.errors[temp].message;
            allErrors.push(singleError);
        }
        out[2] = {"error": allErrors};

        res.json(out);
    }
});


module.exports = router;