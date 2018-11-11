//import validator class
const joi = require('joi');

//Schema for new Doctor 
module.exports.newDoctor = joi.object().keys({
    NIC: joi.string().alphanum().min(10).max(10).required(),
    id: joi.string().required(),
    name: joi.string().required(),
    ward: joi.string().required(),
    doctorType: joi.string().required(),
});

//Schema update doctor
module.exports.updateDoctor = joi.object().keys({
    id: joi.string().alphanum().required(),
    _id: joi.string().alphanum().required(),
    NIC: joi.string().min(10).alphanum().required(),
    name: joi.string().min(2).required(),
    ward: joi.string().min(1).required(),
    doctorType: joi.string().required()
});

//Schema remove doctor 
module.exports.removeDoctor = joi.object().keys({
    doctor_id: joi.string().alphanum().required()
});