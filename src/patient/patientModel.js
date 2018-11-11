//import libraries
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create nurse Schema 
const patientSchema = new Schema({
    NIC: String,
    id: String,
    name: String,
    ward:String,
    priority:String,
    gender:String,
    distric:String,
    date:String,
    level:String,
    wardChanges:String,
    comments:String
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);