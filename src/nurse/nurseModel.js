//import libraries
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create nurse Schema 
const nurseSchema = new Schema({
    NIC: String,
    name: String,
    ward:String,
    priority:String
}, { timestamps: true });

module.exports = mongoose.model('Nurse', nurseSchema);