//import libraries
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create nurse Schema
const predictionsSchema = new Schema({
    dataNew: Array,
    dataOld: Array,
    type: String,
    algorithmNo:String,
    oldCount:Number,
    newCount:Number
}, { timestamps: true });

module.exports = mongoose.model('predictions', predictionsSchema);