//import libraries
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create post Schema 
const doctorSchema = new Schema({
    NIC: String,
    id: String,
    name: String,
    ward:String,
    doctorType:String
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);