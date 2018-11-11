//import validator class
const joi = require('joi');

//Schema for new Nurse 
module.exports.newNurse = joi.object().keys({
    NIC: joi.string().alphanum().min(10).max(10).required(),
    name: joi.string().required(),
    ward: joi.string().required(),
    priority: joi.string().required()
});

//Schema update Nurse
module.exports.updateNurse = joi.object().keys({
    NIC: joi.string().min(10).alphanum().required(),
    name: joi.string().min(2).required(),
    ward: joi.string().min(1).required(),
    priority: joi.string().required()
});

//Schema remove Nurse 
module.exports.removeNurse = joi.object().keys({
    nurse_id: joi.string().alphanum().required()
});