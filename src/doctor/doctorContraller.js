'use strict'
const response = require('../../services/responseService');
const service = require('../doctor/doctorService');

/**
 * Add new doctor to the system
 * @param {*} req               
 * @param {*} res 
 */
module.exports.addDoctor = function (req, res) {
    //call add new doctor to the database method
    service.newDoctor(req.body, res, function (data) {
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
module.exports.removeDoctor = function (req, res) {
    //call add post to the database method
    service.removeDoctor(req.body.doctor_id, res, function (data) {
        if (data.status) {
            return response.successWithData(data.data, res);
        } else {
            return response.customError(data.data, res);
        }
    })
};

/**
 * Update doctor from the system
 * @param {*} req               
 * @param {*} res 
 */
module.exports.updateDoctor = function (req, res) {
    //call add post to the database method
    service.updateDoctor(req.body, res, function (data) {
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
module.exports.getAllDoctors = function (req, res) {
    //call add post to the database method
    service.getAllDoctors(req, res, function (data) {
        if (data.status) {
            return response.successWithData(data.data, res);
        } else {
            return response.customError(data.data, res);
        }
    })
};