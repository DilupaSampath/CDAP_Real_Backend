//import validator class
const joi = require('joi');

//Schema for new Patient 
module.exports.newPatient = joi.object().keys({
    NIC: joi.string().alphanum().min(10).max(10).required(),
    id: joi.string().required(),
    name: joi.string().required(),
    ward: joi.string().required(),
    priority: joi.string().required(),
    gender:joi.string().required(),
    distric:joi.string().required(),
    date:joi.string().required(),
    level:joi.string().required(),
    wardChanges:joi.string().required(),
    comments:joi.string(),
});

//Schema update Patient
module.exports.updatePatient = joi.object().keys({
    // _id: joi.string().alphanum().required(),
    NIC: joi.string().alphanum().min(10).max(10).required(),
    id: joi.string().required(),
    name: joi.string().required(),
    ward: joi.string().required(),
    priority: joi.string().required(),
    gender:joi.string().required(),
    distric:joi.string().required(),
    date:joi.string().required(),
    level:joi.string().required(),
    wardChanges:joi.string(),
    comments:joi.string(),
});

//Schema remove Nurse 
module.exports.removePatient = joi.object().keys({
    patient_id: joi.string().alphanum().required()
});