const mongoose = require('mongoose');

//Define the person schema

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number 
    },
    work:{
        type: String,
        enum: ['c hef', 'waiter', 'manager'],
        require: true
    },
    mobile:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    address:{
        type: String,
    },
    salary:{
        type: Number,
        required: true
    }

});

// Create Person model 
const person = mongoose.model('person', personSchema);
module.exports = person;