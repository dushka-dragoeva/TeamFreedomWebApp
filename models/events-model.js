/* globals require */
"use strict";

const mongoose = require("mongoose");

let eventsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max: 100
    },
    description: {
        type: String,
        required: true,
        min: 20,
        max: 500
    },
    date: {
        type: Date
    }
});

mongoose.model("Events", eventsSchema);

module.exports = mongoose.model("Events");