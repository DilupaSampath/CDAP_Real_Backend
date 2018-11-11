'use strict'
const response = require('../../services/responseService');
const service = require('../algorithms/algorithmsService');

/**
 * Add new doctor to the system
 * @param {*} req               
 * @param {*} res 
 */
module.exports.addAlgorithm = function (req, res) {
    //call add new doctor to the database method
    service.addAlgorithm(req.body, res, function (data) {
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
module.exports.removeAlgorithm = function (req, res) {
    //call add post to the database method
    service.removeAlgorithm(req.body._id, res, function (data) {
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
module.exports.updateAlgorithm = function (req, res) {
    //call add post to the database method
    service.updateAlgorithm(req.body, res, function (data) {
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
module.exports.getAllAlgorithms = function (req, res) {
    //call add post to the database method
    service.getAllAlgorithms(req, res, function (data) {
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
module.exports.compairPastData = function (req, res) {
    //call add post to the database method
    service.compairPastData(req.body, res, function (data) {
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
module.exports.addData = function (req, res) {
    //call add post to the database method
    service.addData(req.body, res, function (data) {
        if (data.status) {
            return response.successWithData(data.data, res);
        } else {
            return response.customError(data.data, res);
        }
    })
};