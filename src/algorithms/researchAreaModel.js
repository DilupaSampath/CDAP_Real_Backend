//import libraries
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create post Schema 
const researchSchema = new Schema({
   data:[
       { 
    year: String,
    month: String,
    district: String,
    total: Number,
    count: Number
   }
]
}, { timestamps: true });

module.exports = mongoose.model('researchArea', researchSchema);