'use strict'
const response = require('../../services/responseService');
const service = require('../nurse/nurseService');

/**
 * Add new nurse to the system
 * @param {*} req               
 * @param {*} res 
 */
module.exports.addNurse = function (req, res) {
    //call add new doctor to the database method
    service.newNurse(req.body, res, function (data) {
        if (data.status) {
            return response.successWithData(data.data, res);
        } else {
            return response.customError(data.data, res);
        }
    })
};

/**
 * Remove nurse from the system
 * @param {*} req               
 * @param {*} res 
 */
module.exports.removeNurse = function (req, res) {
    //call add post to the database method
    service.removeNurse(req.body.nurse_id, res, function (data) {
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
module.exports.updateNurse = function (req, res) {
    //call add post to the database method
    service.updateNurse(req.body, res, function (data) {
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
module.exports.getAllNurses = function (req, res) {
    //call add post to the database method
    service.getAllNurses(req, res, function (data) {
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
module.exports.addNewNurseToWarkingTable = function (req, res) {
    //call add post to the database method
    service.addNewNurseToWarkingTable(req.body, res, function (data) {
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
module.exports.updateNurseToWarkingTable = function (req, res) {
    //call add post to the database method
    service.updateNurseToWarkingTable(req.body, res, function (data) {
        if (data.status) {
            return response.successWithData(data.data, res);
        } else {
            return response.customError(data.data, res);
        }
    })
};