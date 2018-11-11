'use strict'

const doctorModel = require('../doctor/doctorModel');
const callBackResponse = require('../../services/callBackResponseService');

/**
 * 
 */
module.exports.newDoctor = function (body, res, callBack) {

    //check User is on the database
    doctorModel.find({ id: body.id }, function (error, user) {
   
        if (user.length == 0) {
            const doctor = new doctorModel();
            doctor.NIC = body.NIC;
            doctor.id = body.id;
            doctor.name = body.name;
            doctor.ward = body.ward;
            doctor.doctorType = body.doctorType;
          
            doctor.save(function (err, post) {
                if (err) {
                    callBack(callBackResponse.callbackWithDefaultError());
                } else {
                    callBack(callBackResponse.callbackWithData(doctor));
                }
            });


        } else {
            callBack(callBackResponse.callbackWithfalseMessage('Doctor Already Exist'));
        }

    });

};

/**
 * delete doctor from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.removeDoctor = function (doctor_id, res, callBack) {
    //check User is on the database
    doctorModel.find({ id: doctor_id }, function (error, user) {
   
        if (user.length == 0) {
            callBack(callBackResponse.callbackWithfalseMessage('Doctor Not Found'));
        } else {
            //delete User from the database
            doctorModel.remove({ id: doctor_id }, function (err) {
                if (err) {
                    callBack(callBackResponse.callbackWithDefaultError());
                } else {
                    callBack(callBackResponse.callbackWithSucessMessage('Doctor Removed From The System'));
                }
            });
        }
    });
};



//Update doctor from the database
module.exports.updateDoctor = function (body, res, callBack) {
    //find product from the database using user_id
    doctorModel.find({ id: body.id }, function (err, doctor) {
    
        if (doctor != undefined) {

            var doctorobj = {};
            doctorobj.id = body.id,
                doctorobj.NIC = body.NIC,
                doctorobj.name = body.name,
                doctorobj.ward = body.ward,
                doctorobj.doctorType = body.doctorType

            doctorModel.update({ id: body.id }, doctorobj, function (err, updateDoctor) {
                if (err) {
                    callBack(callBackResponse.callbackWithDefaultError());
                } else {
                    callBack(callBackResponse.callbackWithData(updateDoctor));
                }
            });


        }
        else {
            callBack(callBackResponse.callbackWithfalseMessage('doctor does not exist'));

        }
    });
};

/**
 * get all doctors from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.getAllDoctors = function (req, res, callBack) {
    //check User is on the database
    doctorModel.find({}, function (error, doctors) {
    
        if (error) {
            callBack(callBackResponse.callbackWithfalseMessage(error));
        } else {
            //delete User from the database

            callBack(callBackResponse.callbackWithData(doctors));
        }
    });

};
