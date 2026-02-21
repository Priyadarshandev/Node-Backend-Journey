const mongoose = require('mongoose');

// Define the schema (structure of document inside MongoDB collection)
const personSchema = new mongoose.Schema({

    // Person name (required field)
    name: {
        type: String,
        required: true
    },

    // Age (optional field)
    age:{
        type: Number 
    },

    // Job role (only specific values allowed using enum)
    work:{
        type: String,
        enum: ['chef', 'waiter', 'manager'], // only these 3 values allowed
        required: true
    },

    // Mobile number (required)
    mobile:{
        type: String,
        required: true
    },

    // Email must be unique and required
    email:{
        type: String,
        required: true,
        unique: true   // no duplicate email allowed
    },

    // Address (optional)
    address:{
        type: String,
    },

    // Salary (required field)
    salary:{
        type: Number,
        required: true
    }

});

// Create Model (Collection name will be 'people' automatically pluralized)
const Person = mongoose.model('Person', personSchema);

// Export model so we can use it inside server.js
module.exports = Person;