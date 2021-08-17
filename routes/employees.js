
const express = require("express");
const router = express.Router();
const Eight = require('../model/Employees');

router.get('/', (req, res) => {
    Eight.find((err, data) => {
        if(err) throw err;
        res.send(data)
    })
})


router.post('/', (req,res) => {
    Eight.create(req.body, (err, data) => {
        if(err) throw err;
        res.send(data)
    })
})


module.exports = router;