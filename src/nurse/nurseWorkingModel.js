//import libraries
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create nurse Schema 
const nurseStatusSchema = new Schema({
    NIC: String,
    name: String,
    lastWorkingStatus:String,
    leaveCount:Number
}, { timestamps: true });

module.exports = mongoose.model('NurseStatus', nurseStatusSchema);