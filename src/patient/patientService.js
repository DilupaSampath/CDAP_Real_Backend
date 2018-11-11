'use strict'

const patientModel = require('../patient/patientModel');
const predictionsModel = require('../predictions/predictionsModel');
const algorithmsModel = require('../algorithms/algorithmsModel');
const callBackResponse = require('../../services/callBackResponseService');

/**
 * 
 */
module.exports.newPatient = function (body, res, callBack) {

    //check User is on the database
    patientModel.find({ id: body.id }, function (error, user) {

        if (user.length == 0) {
            const patient = new patientModel();


            patient.NIC = body.NIC,
                patient.id = body.id,
                patient.name = body.name,
                patient.ward = body.ward,
                patient.priority = body.priority,
                patient.gender = body.gender,
                patient.distric = body.distric,
                patient.date = body.date,
                patient.level = body.level,
                patient.wardChanges = body.wardChanges,
                patient.comments = body.comments,

                patient.save(function (err, patients) {
                    if (err) {
                        callBack(callBackResponse.callbackWithDefaultError());
                    } else {
                        callBack(callBackResponse.callbackWithData(patients));
                    }
                });


        } else {
            callBack(callBackResponse.callbackWithfalseMessage('Patient Already Exist'));
        }

    });

};

/**
 * delete doctor from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.removePatient = function (patient_id, res, callBack) {
    //check User is on the database
    patientModel.find({ id: patient_id }, function (error, user) {

        if (user.length == 0) {
            callBack(callBackResponse.callbackWithfalseMessage('Patient Not Found'));
        } else {
            //delete User from the database
            patientModel.remove({ id: patient_id }, function (err) {
                if (err) {
                    callBack(callBackResponse.callbackWithDefaultError());
                } else {
                    callBack(callBackResponse.callbackWithSucessMessage('Patient Removed From The System'));
                }
            });
        }
    });
};



//Update doctor from the database
module.exports.updatePatient = function (body, res, callBack) {
    //find product from the database using user_id
    patientModel.find({ id: body.id }, function (err, user) {

        if (user != undefined) {

            var patientobj = {};
            patientobj.id = body.id,
                patientobj.NIC = body.NIC,
                patientobj.name = body.name,
                patientobj.ward = body.ward,
                patientobj.priority = body.priority,
                patientobj.gender = body.gender,
                patientobj.distric = body.distric,
                patientobj.date = body.date,
                patientobj.level = body.level,
                patientobj.wardChanges = body.wardChanges,
                patientobj.comments = body.comments


            patientModel.update({ id: body.id }, patientobj, function (err, updatePatient) {
                if (err) {
                    callBack(callBackResponse.callbackWithDefaultError());
                } else {
                    callBack(callBackResponse.callbackWithData(updatePatient));
                }
            });


        }
        else {
            callBack(callBackResponse.callbackWithfalseMessage('Patient does not exist'));

        }
    });
};

/**
 * get all nurses from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.getAllPatients = function (req, res, callBack) {
    //check User is on the database
    patientModel.find({}, function (error, patients) {

        if (error) {
            callBack(callBackResponse.callbackWithfalseMessage(error));
        } else {
            //delete User from the database

            callBack(callBackResponse.callbackWithData(patients));
        }
    });

};


/**
 * get all nurses from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.getLastWeekPatientCounts = function (req, res, callBack) {
    //check User is on the database
    var today = new Date();
    var lastWeekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    var lastWeekEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    var start = new Date(lastWeekStart.setHours(0, 0, 0, 0));
    var end = new Date(lastWeekEnd.setHours(23, 59, 59, 999));

    patientModel.aggregate([
        {
            "$group": {
                "_id": null,
                "total": { "$sum": 1 },
                "usersCreatedLastWeek": {
                    "$sum": {
                        "$cond": [
                            {
                                "$lte": ["$createdAt", end]

                            },
                            1,
                            0
                        ]
                    }
                }
            }
        }
    ], function (error, patients) {

        if (error) {
            callBack(callBackResponse.callbackWithfalseMessage(error));
        } else {
            //delete User from the database

            callBack(callBackResponse.callbackWithData(patients));
        }
    })



    // patientModel.find({}, function (error, patients) {
    //     console.log(patients);
    //     if (error) {
    //         callBack(callBackResponse.callbackWithfalseMessage(error));
    //     } else {
    //         //delete User from the database

    //         callBack(callBackResponse.callbackWithData(patients));
    //     }
    // });

};




/**
 * get all nurses from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.getPatientCountGroupByDistrict = function (req, res, callBack) {
    //check User is on the database
    var w1 = 0;
    var w2 = 0;
    var w3 = 0;
    var patientTotal = 0;
    var w1Presentage = 0;
    var w2Presentage = 0;
    var w3Presentage = 0;
    var nextweekWard1 = 0;
    var nextweekWard2 = 0;
    var nextweekWard3 = 0;
    patientModel.aggregate(
        [
            { "$group": { _id: "$distric", count: { $sum: 1 } } }
        ]
        , function (error, patients) {
            console.log('**********************************');
            console.log(patients);
            console.log('**********************************');
            if (error) {
                callBack(callBackResponse.callbackWithfalseMessage(error));
            } else {
                //delete User from the database  patientGroupData.forEach(function (element) {
                    algorithmsModel.find({ type: { $eq: "prediction" }, status: "true" },
                    (err, currentAlgo) => {
                        predictionsModel.find({ algorithmNo: currentAlgo[0].algorithmNo }, (err, lastRes) => {
                            patients.forEach(function (element) {
                                
                                                    if (element._id == "Gampaha") {
                                                        w1 = element.count;
                                                    } else if (element._id == "Colombo") {
                                                        w2 = element.count;
                                                       
                                                    } else {
                                                        w3 = element.count;
                                                       
                                                    }
                                                    patientTotal = element.count+patientTotal;
                                                });
                                                console.log(patientTotal);
                                                console.log(patients);
                                                console.log(lastRes);
                                                w1Presentage = (w1 * 100) / parseInt(patientTotal);
                                                w2Presentage = (w2 * 100) / parseInt(patientTotal);
                                                w3Presentage = (w3 * 100) / parseInt(patientTotal);
                                
                                
                                                nextweekWard1 = Math.round((w1Presentage * lastRes[0].newCount) / 100);
                                                nextweekWard2 = Math.round((w2Presentage * lastRes[0].newCount) / 100);
                                                nextweekWard3 = Math.round((w3Presentage * lastRes[0].newCount) / 100);
                                
                                                console.log(
                                                    [
                                                        { "_id": "Colombo", "value": { "nextweek": nextweekWard1, "current": w1 } },
                                                        { "_id": "Gampaha", "value": { "nextweek": nextweekWard2, "current": w2 } },
                                                        { "_id": "Kaluthara", "value": { "nextweek": nextweekWard3, "current": w3 } }
                                                    ]
                                                );
                                              
                                
                                                callBack(callBackResponse.callbackWithData([
                                                    { "_id": "Colombo", "value": { "nextweek": nextweekWard1, "current": w1 } },
                                                    { "_id": "Gampaha", "value": { "nextweek": nextweekWard2, "current": w2 } },
                                                    { "_id": "Kaluthara", "value": { "nextweek": nextweekWard3, "current": w3 } }
                                                ]));


                        });
                     

                    });
               
            }
        })

};

/**
 * get all nurses from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.getPatientNextWeekPatientCountForEachWard = function (req, res, callBack) {
    //check User is on the database
    var w1 = 0;
    var w2 = 0;
    var w3 = 0;
    var patientTotal = 0;
    var w1Presentage = 0;
    var w2Presentage = 0;
    var w3Presentage = 0;
    var nextweekWard1 = 0;
    var nextweekWard2 = 0;
    var nextweekWard3 = 0;

    algorithmsModel.find({ type: { $eq: "prediction" }, status: "true" },
        (err, currentAlgo) => {

            patientModel.aggregate(
                [
                    { "$group": { _id: "$ward", count: { $sum: 1 } } }
                ], (errr, patientGroupData) => {


                    predictionsModel.find({ algorithmNo: currentAlgo[0].algorithmNo }, (err, lastRes) => {

                        patientGroupData.forEach(function (element) {

                            patientTotal = patientTotal + element.count;
                            // console.log(patientTotal);
                        });
                        patientGroupData.forEach(function (element) {
                            if (element._id == "Ward 1") {
                                w1 = element.count;
                            } else if (element._id == "Ward 2") {
                                w2 = element.count;
                            } else {
                                w3 = element.count;
                            }
                        });
                        // console.log(patientGroupData[0]);
                        // console.log(lastRes);
                        // patientTotal = 50;
                        //50 = ward1 now and 70 = total
                        w1Presentage = (w1 * 100) / parseInt(patientTotal);
                        w2Presentage = (w2 * 100) / parseInt(patientTotal);
                        w3Presentage = (w3 * 100) / parseInt(patientTotal);


                        nextweekWard1 = Math.round((w1Presentage * lastRes[0].newCount) / 100);
                        nextweekWard2 = Math.round((w2Presentage * lastRes[0].newCount) / 100);
                        nextweekWard3 = Math.round((w3Presentage * lastRes[0].newCount) / 100);

                        callBack(callBackResponse.callbackWithData([
                            { "ward": 1, "value": { "nextweek": nextweekWard1, "current": w1 } },
                            { "ward": 2, "value": { "nextweek": nextweekWard2, "current": w2 } },
                            { "ward": 3, "value": { "nextweek": nextweekWard3, "current": w3 } }
                        ]
                        ));

                    });
                });


        });

};


/**
 * get all nurses from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.getPatientCountGroupByWard = function (req, res, callBack) {
    //check User is on the database
    patientModel.aggregate(
        [
            { "$group": { _id: "$ward", count: { $sum: 1 } } }
        ]
        , function (error, patients) {
            console.log(patients);
            if (error) {
                callBack(callBackResponse.callbackWithfalseMessage(error));
            } else {
                //delete User from the database

                callBack(callBackResponse.callbackWithData(patients));
            }
        })

};