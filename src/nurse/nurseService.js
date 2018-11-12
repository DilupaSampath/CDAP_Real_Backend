'use strict'

const nurseModel = require('../nurse/nurseModel');
const nurseWorkingModel = require('../nurse/nurseWorkingModel');
const callBackResponse = require('../../services/callBackResponseService');
const fs = require('fs');
const json2csv = require('json2csv');
const Json2csvParser = require('json2csv').Parser;

/**
 * 
 */
module.exports.newNurse = function (body, res, callBack) {
 
    //check User is on the database
    nurseModel.find({ NIC: body.NIC }, function (error, user) {
   
        if (user.length == 0) {
            const nurse = new nurseModel();
            nurse.NIC = body.NIC;
            nurse.name = body.name;
            nurse.ward = body.ward;
            nurse.priority = body.priority;
         
            nurse.save(function (err, nurse) {
                if (err) {
                    callBack(callBackResponse.callbackWithDefaultError());
                } else {
                    const bodyRes=[];
                    const items = ["OT","Allowed"]
                    // callBack(callBackResponse.callbackWithData(nurse));
nurseModel.find({}, { NIC: 1},function(err,dataResult){

    dataResult.forEach(function(element) {
        bodyRes.push(
{
    "Nurses":element.NIC,
    "Shift":items[Math.floor(Math.random()*items.length)]
}

       );     
    
}, this);

});

    //check User is on the database

    var object = [];
    const csvFilePath = 'nurses.csv'
    const csv = require('csvtojson')
    var newLine = "\r\n";
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {

            object = jsonObj;
        }).then(function () {
          


const fields = ['Nuesrs', 'Shift'];
        var appendThis = bodyRes;

        var toCsv = {
            data: appendThis,
            hasCSVColumnTitle: false
        };

        fs.stat('nurses.csv', function (err, stat) {
            try {
                if (err == null) {

    const json2csvParser = new Json2csvParser();
    const csv = json2csvParser.parse(appendThis);


                    fs.writeFile('nurses.csv', csv, function (err) {

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
            });


        } else {
            callBack(callBackResponse.callbackWithfalseMessage('Nurse Already Exist'));
        }

    });

};

/**
 * delete doctor from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.removeNurse = function (nurse_id, res, callBack) {
    //check User is on the database
    nurseModel.find({ NIC: nurse_id }, function (error, user) {
      
        if (user.length == 0) {
            callBack(callBackResponse.callbackWithfalseMessage('Nurse Not Found'));
        } else {
            //delete User from the database
            nurseModel.remove({ NIC: nurse_id }, function (err) {
                if (err) {
                    callBack(callBackResponse.callbackWithDefaultError());
                } else {
                    callBack(callBackResponse.callbackWithSucessMessage('Nurse Removed From The System'));
                }
            });
        }
    });
};



//Update doctor from the database
module.exports.updateNurse = function (body, res, callBack) {
    //find product from the database using user_id
    nurseModel.find({ NIC: body.NIC }, function (err, user) {
       
        if (user != undefined) {

            var nurseobj = {};
            nurseobj.NIC = body.NIC,
                nurseobj.name = body.name,
                nurseobj.ward = body.ward,
                nurseobj.priority = body.priority

            nurseModel.update({ NIC: body.NIC }, nurseobj, function (err, updateNurse) {
                if (err) {
                    callBack(callBackResponse.callbackWithDefaultError());
                } else {
                    callBack(callBackResponse.callbackWithData(updateNurse));
                }
            });


        }
        else {
            callBack(callBackResponse.callbackWithfalseMessage('Nurse does not exist'));

        }
    });
};

/**
 * get all nurses from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.getAllNurses = function (req, res, callBack) {
    //check User is on the database
    nurseModel.find({}, function (error, nurses) {
     
        if (error) {
            callBack(callBackResponse.callbackWithfalseMessage(error));
        } else {
            //delete User from the database

            callBack(callBackResponse.callbackWithData(nurses));
        }
    });

};


// /**
//  * get all nurses from the database
//  * @param {*} user_id 
//  * @param {*} res 
//  * @param {*} callBack 
//  */
// module.exports.addNewNurseToWarkingTable = function (req, res, callBack) {

//     console.log("req.bodys");
//     //check User is on the database
//     nurseWorkingModel.find({ NIC: body.NIC }, function (error, user) {
//         console.log(user.length);
//         if (user.length == 0) {
//             const nurse = new nurseModel();
//             nurse.NIC = body.NIC;
//             nurse.name = body.name;
//             nurse.lastWorkingStatus = body.lastWorkingStatus;
//             nurse.leaveCount = body.leaveCount;
//             console.log(nurse);
//             nurse.save(function (err, nurse) {
//                 if (err) {
//                     callBack(callBackResponse.callbackWithDefaultError());
//                 } else {
//                     callBack(callBackResponse.callbackWithData(nurse));
//                 }
//             });


//         } else {
//             callBack(callBackResponse.callbackWithfalseMessage('Nurse Already Exist'));
//         }

//     });

// };



/**
 * get all nurses from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.addNewNurseToWarkingTable = function (body, res, callBack) {

   

    //check User is on the database
    nurseWorkingModel.find({ NIC: body.NIC }, function (error, user) {
     
        if (user.length == 0) {
            const nurse = new nurseWorkingModel();
            nurse.NIC = body.NIC;
            nurse.name = body.name;
            nurse.lastWorkingStatus = body.lastWorkingStatus;
            nurse.leaveCount = body.leaveCount;
         
            nurse.save(function (err, nurse) {
                if (err) {
                    callBack(callBackResponse.callbackWithDefaultError());
                } else {
                    callBack(callBackResponse.callbackWithData(nurse));
                }
            });


        } else {
            callBack(callBackResponse.callbackWithfalseMessage('Nurse Already Exist'));
        }

    });

};



/**
 * get all nurses from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.updateNurseToWarkingTable = function (body, res, callBack) {
    nurseWorkingModel.find({ NIC: body.NIC }, function (err, user) {
    
        if (user != undefined) {

            var nurseobj = {};
            nurseobj.NIC = body.NIC,
                nurseobj.name = body.name,
                nurseobj.lastWorkingStatus = body.lastWorkingStatus,
                // nurseobj.leaveCount = body.leaveCount

                nurseWorkingModel.updateOne({ NIC: body.NIC }, nurseobj, function (err, updateNurse) {
                    if (err) {
                        callBack(callBackResponse.callbackWithDefaultError());
                    } else {
                        // callBack(callBackResponse.callbackWithData(updateNurse));
                        nurseWorkingModel.updateOne(
                            { NIC: body.NIC },
                            { $inc: { leaveCount: 1 } }
                            , function (err, dataRes) {

                                if (err) {
                                    callBack(callBackResponse.callbackWithfalseMessage(err));
                                } else {
                                    callBack(callBackResponse.callbackWithData(dataRes));
                                }

                            });
                    }
                });
        }
        else {
            callBack(callBackResponse.callbackWithfalseMessage('Nurse does not exist'));

        }
    });
};
