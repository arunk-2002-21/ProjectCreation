const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({

    theme: {
        type: String,
        required: [true, "Project theme is required"],
    },
    reason: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: new Date(),
        required: true
    },
    endDate:{
        type: Date,
        required: true,
        default: new Date()
    },
    location:{
        type: String,
        required: true
    },
});


module.exports = mongoose.model("Project", projectSchema);