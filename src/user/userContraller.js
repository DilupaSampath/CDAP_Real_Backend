'use strict'
const response = require('../../services/responseService');
const service = require('../user/userService');

/**
 * Add new Patient to the system
 * @param {*} req               
 * @param {*} res 
 */
module.exports.createUser = function (req, res) {
    //call add new doctor to the database method
    service.createUser(req.body, res, function (data) {
        if (data.status) {
            return response.successWithData(data.data, res);
        } else {
            return response.customError(data.data, res);
        }
    })
};


/**
 * Add new Patient to the system
 * @param {*} req               
 * @param {*} res 
 */
module.exports.loginUser = function (req, res) {
    //call add new doctor to the database method
    console.log("login[]");
    service.loginUser(req.body, res, function (data) {
        if (data.status) {
            return response.successWithData(data.data, res);
        } else {
            return response.customError(data.data, res);
        }
    })
};