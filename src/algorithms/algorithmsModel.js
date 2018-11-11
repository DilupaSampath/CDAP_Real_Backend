//import libraries
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create post Schema 
const algorithmsSchema = new Schema({
    type: String,
    algorithmNo: String,
    status: String
}, { timestamps: true });

module.exports = mongoose.model('algorithms', algorithmsSchema);