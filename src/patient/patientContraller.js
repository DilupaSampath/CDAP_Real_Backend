'use strict'
const response = require('../../services/responseService');
const service = require('../patient/patientService');

/**
 * Add new Patient to the system
 * @param {*} req               
 * @param {*} res 
 */
module.exports.addPatient = function (req, res) {
    //call add new doctor to the database method
    service.newPatient(req.body, res, function (data) {
        if (data.status) {
            return response.successWithData(data.data, res);
        } else {
            return response.customError(data.data, res);
        }
    })
};

/**
 * Remove doctor from the system
 * @param {*} req               
 * @param {*} res 
 */
module.exports.removePatient = function (req, res) {
    //call add post to the database method
    service.removePatient(req.body.patient_id, res, function (data) {
        if (data.status) {
            return response.successWithData(data.data, res);
        } else {
            return response.customError(data.data, res);
        }
    })
};

/**
 * Update Patient from the system
 * @param {*} req               
 * @param {*} res 
 */
module.exports.updatePatient = function (req, res) {
    //call add post to the database method
    service.updatePatient(req.body, res, function (data) {
        if (data.status) {
            return response.successWithData(data.data, res);
        } else {
            return response.customError(data.data, res);
        }
    })
};

/**
 * Get All doctors from the system
 * @param {*} req               
 * @param {*} res 
 */
module.exports.getAllPatient = function (req, res) {
    //call add post to the database method
    service.getAllPatients(req, res, function (data) {
        if (data.status) {
            return response.successWithData(data.data, res);
        } else {
            return response.customError(data.data, res);
        }
    })
};


/**
 * Get All doctors from the system
 * @param {*} req               
 * @param {*} res 
 */
module.exports.getLastWeekPatientCounts = function (req, res) {
    //call add post to the database method
    service.getLastWeekPatientCounts(req, res, function (data) {
        if (data.status) {
            return response.successWithData(data.data, res);
        } else {
            return response.customError(data.data, res);
        }
    })
};


/**
 * Get All doctors from the system
 * @param {*} req               
 * @param {*} res 
 */
module.exports.getPatientCountGroupByDistrict = function (req, res) {
    //call add post to the database method
    service.getPatientCountGroupByDistrict(req, res, function (data) {
        if (data.status) {
            return response.successWithData(data.data, res);
        } else {
            return response.customError(data.data, res);
        }
    })
};


/**
 * Get All doctors from the system
 * @param {*} req               
 * @param {*} res 
 */
module.exports.getPatientNextWeekPatientCountForEachWard = function (req, res) {
    //call add post to the database method
    service.getPatientNextWeekPatientCountForEachWard(req, res, function (data) {
        if (data.status) {
            return response.successWithData(data.data, res);
        } else {
            return response.customError(data.data, res);
        }
    })
};

/**
 * Get All doctors from the system
 * @param {*} req               
 * @param {*} res 
 */
module.exports.getPatientCountGroupByWard = function (req, res) {
    //call add post to the database method
    service.getPatientCountGroupByWard(req, res, function (data) {
        if (data.status) {
            return response.successWithData(data.data, res);
        } else {
            return response.customError(data.data, res);
        }
    })
};