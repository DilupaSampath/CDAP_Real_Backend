'use strict'
const response = require('../../services/responseService');
const service = require('../predictions/predictionsService');

/**
 * Add new Patient to the system
 * @param {*} req               
 * @param {*} res 
 */
module.exports.newPredictions = function (req, res) {
    //call add new doctor to the database method
    service.newPredictions(req.body, res, function (data) {
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
module.exports.removePredictionsByTypeAndAlgirithm = function (req, res) {
    //call add post to the database method
    service.removePredictionsByTypeAndAlgirithm(req.body.patient_id, res, function (data) {
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
module.exports.updatePredictionsByTypeAndAlgirithm = function (req, res) {
    //call add post to the database method
    service.updatePredictionsByTypeAndAlgirithm(req.body, res, function (data) {
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
module.exports.getPredictionsByTypeAndAlgorithm = function (req, res) {
    //call add post to the database method
    service.getPredictionsByTypeAndAlgorithm(req.body, res, function (data) {
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
module.exports.getInputsForOptimization = function (req, res) {
    //call add post to the database method
    service.getInputsForOptimization(req.body, res, function (data) {
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
module.exports.getInputsForPrediction = function (req, res) {
    //call add post to the database method
    service.getInputsForPrediction(res, function (data) {
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
module.exports.getNextWeekFreeNurseCount = function (req, res) {
    //call add post to the database method
    service.getNextWeekFreeNurseCount(req, res, function (data) {
        if (data.status) {
            return response.successWithData(data.data, res);
        } else {
            return response.customError(data.data, res);
        }
    })
};