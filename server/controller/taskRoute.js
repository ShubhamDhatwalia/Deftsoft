const express = require('express');
const router = express.Router();
const Task = require('../models/taskModel');

router.get('/', async(req, res) => {
    try{
        const task = await Task.find()
        res.status(200).json(task)
    }
    catch(err){
        res.status(500).json({message: err})
    }
})
module.exports = router;