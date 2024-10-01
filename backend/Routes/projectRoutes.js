const express = require('express');
const Project = require('../Models/projectModel');
const router = express.Router();

// create project route
router.post('/create', async (req, res) => {
    const {
        theme,
        reason,
        type,
        division,
        category,
        priority,
        department,
        startDate,
        endDate,
        location,
    } = req.body;

    // convert dates from string to date objects
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Validation- check if end date is less than start date
    if(end < start){
        return res.status(400).json({message: 'End date cannot be earlier than start date.'});
    }

    try {
        const newProject = new Project({
            theme,
            reason,
            type,
            division,
            category,
            priority,
            department,
            startDate,
            endDate,
            location,
        });

        await newProject.save();
        res.status(201).json({message: 'Project created successfully', Project: newProject});
    } catch (error) {
        res.status(500).json({message: ' Error creating project', error});
    }
});

module.exports = router;