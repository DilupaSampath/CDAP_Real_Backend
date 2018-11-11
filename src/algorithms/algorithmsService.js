'use strict'

const algorithmModel = require('../algorithms/algorithmsModel');
const config = require('../../config/config');
const callBackResponse = require('../../services/callBackResponseService');
const researchModel = require('../algorithms/researchAreaModel');
const fs = require('fs');
const json2csv = require('json2csv');
const Json2csvParser = require('json2csv').Parser;
/**
 * 
 */
module.exports.addAlgorithm = function (body, res, callBack) {

    //check User is on the database
    algorithmModel.find({ algorithmNo: body.algorithmNo }, function (error, logic) {

        if (logic.length == 0) {
            const algorithm = new algorithmModel();
            algorithm.type = body.type;
            algorithm.algorithmNo = body.algorithmNo;
            algorithm.status = body.status;

            algorithm.save(function (err, data) {
                if (err) {
                    callBack(callBackResponse.callbackWithDefaultError());
                } else {
                    callBack(callBackResponse.callbackWithData(data));
                }
            });


        } else {
            callBack(callBackResponse.callbackWithfalseMessage('algorithmNo Already Exist'));
        }

    });

};

/**
 * delete doctor from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.removeAlgorithm = function (_id, res, callBack) {
    //check User is on the database
    algorithmModel.find({ _id: _id }, function (error, algorithm) {

        if (algorithm.length == 0) {
            callBack(callBackResponse.callbackWithfalseMessage('algorithm Not Found'));
        } else {
            //delete User from the database
            algorithmModel.remove({ _id: _id }, function (err) {
                if (err) {
                    callBack(callBackResponse.callbackWithDefaultError());
                } else {
                    callBack(callBackResponse.callbackWithSucessMessage('algorithmModel Removed From The System'));
                }
            });
        }
    });
};



//Update doctor from the database
module.exports.updateAlgorithm = function (body, res, callBack) {
    //find product from the database using user_id
    algorithmModel.find({ algorithmNo: body.algorithmNo }, function (err, logic) {

        if (logic != undefined) {

            var algorithmobj = {};
            algorithmobj.type = body.type,
                algorithmobj.algorithmNo = body.algorithmNo,
                algorithmobj.status = body.status

            algorithmModel.update({ algorithmNo: body.algorithmNo }, algorithmobj, function (err, updateAlgorithm) {
                if (err) {
                    callBack(callBackResponse.callbackWithDefaultError());
                } else {
                    callBack(callBackResponse.callbackWithData(updateAlgorithm));
                }
            });


        }
        else {
            callBack(callBackResponse.callbackWithfalseMessage('Algorithm does not exist'));

        }
    });
};

/**
 * get all doctors from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.getAllAlgorithms = function (req, res, callBack) {
    //check User is on the database
    algorithmModel.find({}, function (error, logics) {

        if (error) {
            callBack(callBackResponse.callbackWithfalseMessage(error));
        } else {
            //delete User from the database

            callBack(callBackResponse.callbackWithData(logics));
        }
    });

};

/**
 * get all doctors from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.compairPastData = function (body, res, callBack) {

    var month1 = {};
    var month2 = {};


    config.researchAreaArray.forEach(function (element) {
        if (element.district.toLocaleLowerCase() == body.district.toLocaleLowerCase()) {
            if (body.month1.toLocaleLowerCase() == "april" || body.month1.toLocaleLowerCase() == "march" || body.month2.toLocaleLowerCase() == "april" || body.month2.toLocaleLowerCase() == "march") {
                //donothing
            } else {

                if (body.month1.length > 4) {
                    body.month1 = body.month1.substring(0, 3);
                }
                if (body.month2.length > 4) {
                    body.month2 = body.month2.substring(0, 3);
                }

            }

            if (element.month.toLocaleLowerCase() == body.month1.toLocaleLowerCase()) {
                month1.count = element.count;
                month1.total = element.total;
            }
            if (element.month.toLocaleLowerCase() == body.month2.toLocaleLowerCase()) {
                month2.count = element.count;
                month2.total = element.total;
            }
        }
        if (element.district.toLocaleLowerCase() == "colombo" && element.month.toLocaleLowerCase() == body.month1.toLocaleLowerCase()) {
            month1.colombo = element.count;
        }
        if (element.district.toLocaleLowerCase() == "colombo" && element.month.toLocaleLowerCase() == body.month2.toLocaleLowerCase()) {
            month2.colombo = element.count;
        }
    });

    callBack(callBackResponse.callbackWithData({
        month1: month1,
        month2: month2
    }));
    //check User is on the database
    // researchModel.find({}, function (error, research) {

    //     if (error) {
    //         callBack(callBackResponse.callbackWithfalseMessage(error));
    //     } else {
    //         //delete User from the database
    //         // "data.year":body.year,"data.month1":body.month1,"data.month2":body.month2,"data.district":body.district
    //         console.log()
    //         research.data.forEach(function(element) {
    //          console.log(element);   
    //         });


    //         callBack(callBackResponse.callbackWithData(logics));
    //     }
    // });

};


/**
 * get all doctors from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.addData = function (body, res, callBack) {
    //check User is on the database

    var object = [];
    const csvFilePath = 'PatientData.csv'
    const csv = require('csvtojson')
    var newLine = "\r\n";
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {

            object = jsonObj;
        }).then(function () {
          

object.push(
    {
        'date': body.date,
        'count':body.count
    }
);

const fields = ['date', 'count'];
        var appendThis = object;

        var toCsv = {
            data: appendThis,
            hasCSVColumnTitle: false
        };

        fs.stat('PatientData.csv', function (err, stat) {
            try {
                if (err == null) {

    const json2csvParser = new Json2csvParser();
    const csv = json2csvParser.parse(appendThis);


                    fs.writeFile('PatientData.csv', csv, function (err) {

                       console.log('OK');
                       callBack(callBackResponse.callbackWithSucessMessage("data added to prediction table"));
                     });
                }


                else {

                }

            } catch (error) {
                console.log(error);
            }

        });


        });
   



}