//import validator class
const joi = require('joi');
//import response class 
const response = require('../services/responseService');

/**
 * validate the API request body according to the schema defined
 * @returns validation Status
 * @param {*} schema 
 */
module.exports.validateBody = function (schema) {
    return (req, res, next) => {
        //validate the API request body according to the schema defined
        const result = joi.validate(req.body, schema);
        if (result.error) {
            return response.customError(result.error.details[0].message, res);
        } else {
            next();
        }
    }
}