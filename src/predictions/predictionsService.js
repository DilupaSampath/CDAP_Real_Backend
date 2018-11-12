'use strict'
const algorithmsModel = require('../algorithms/algorithmsModel');
const patientModel = require('../patient/patientModel');
const nursesModel = require('../nurse/nurseModel');
const predictionModel = require('../predictions/predictionsModel');
const nurseWorkingModel = require('../nurse/nurseWorkingModel');
const callBackResponse = require('../../services/callBackResponseService');
const config = require('../../config/config');
var ExcelReader = require('node-excel-stream').ExcelReader;
var ExcelWriter = require('node-excel-stream').ExcelWriter;
/**
 * 
 */
module.exports.newPredictions = function (body, res, callBack) {
 
    //check User is on the database
    predictionModel.find({ algorithmNo: body.algorithmNo }, function (error, algorithm) {
      
        if (algorithm.length == 0) {
            const algorithmNew = new predictionModel();
            algorithmNew.dataNew = body.dataNew,
                algorithmNew.dataOld = body.dataNew,
                algorithmNew.type = body.type,
                algorithmNew.algorithmNo = body.algorithmNo,
                algorithmNew.oldCount = body.oldCount,
                algorithmNew.newCount = body.newCount
            
            algorithmNew.save(function (err, data) {
                if (err) {
                    callBack(callBackResponse.callbackWithDefaultError());
                } else {
                    callBack(callBackResponse.callbackWithData(data));
                }
            });


        } else {
            callBack(callBackResponse.callbackWithfalseMessage('Predictions Already Exist'));
        }

    });

};

/**
 * delete doctor from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.removePredictions = function (patient_id, res, callBack) {
    //check User is on the database
    patientModel.find({ id: patient_id }, function (error, user) {
       
        if (user.length == 0) {
            callBack(callBackResponse.callbackWithfalseMessage('Predictions  Not Found'));
        } else {
            //delete User from the database
            patientModel.remove({ id: patient_id }, function (err) {
                if (err) {
                    callBack(callBackResponse.callbackWithDefaultError());
                } else {
                    callBack(callBackResponse.callbackWithSucessMessage('Predictions Removed From The System'));
                }
            });
        }
    });
};


/**
 * delete doctor from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.getSchedules = function (patient_id, res, callBack) {
    //check User is on the database
    var resultNew=[];
    var resultOld=[];
    resultNew = [{"ward1":[{"nurseId":"nurse5","workingStatus":"Allowed"},{"nurseId":"nurse7","workingStatus":"OT"},{"nurseId":"nurse17","workingStatus":"Allowed"},{"nurseId":"nurse12","workingStatus":"Allowed"},{"nurseId":"nurse3","workingStatus":"OT"},{"nurseId":"nurse20","workingStatus":"OT"},{"nurseId":"nurse19","workingStatus":"Allowed"},{"nurseId":"nurse2","workingStatus":"Allowed"}],"ward2":[{"nurseId":"nurse6","workingStatus":"OT"},{"nurseId":"nurse10","workingStatus":"OT"},{"nurseId":"nurse9","workingStatus":"Allowed"},{"nurseId":"nurse18","workingStatus":"OT"},{"nurseId":"nurse16","workingStatus":"Allowed"},{"nurseId":"nurse1","workingStatus":"OT"}],"ward3":[{"nurseId":"nurse14","workingStatus":"Allowed"},{"nurseId":"nurse4","workingStatus":"Allowed"},{"nurseId":"nurse11","workingStatus":"OT"},{"nurseId":"nurse15","workingStatus":"OT"},{"nurseId":"nurse13","workingStatus":"OT"},{"nurseId":"nurse8","workingStatus":"Allowed"}]}];
    resultOld = [{
        "ward1": [{
                "nurseId": "nurse5",
                "workingStatus": "Allowed"
            },
            {
                "nurseId": "nurse14",
                "workingStatus": "Allowed"
            },
            {
                "nurseId": "nurse3",
                "workingStatus": "Allowed"
            },
            {
                "nurseId": "nurse11",
                "workingStatus": "Allowed"
            },
            {
                "nurseId": "nurse17",
                "workingStatus": "Allowed"
            },
            {
                "nurseId": "nurse6",
                "workingStatus": "OT"
            },
            {
                "nurseId": "nurse8",
                "workingStatus": "Allowed"
            },
            {
                "nurseId": "nurse2",
                "workingStatus": "Allowed"
            },
            {
                "nurseId": "nurse13",
                "workingStatus": "Allowed"
            },
            {
                "nurseId": "nurse4",
                "workingStatus": "Allowed"
            },
            {
                "nurseId": "nurse16",
                "workingStatus": "OT"
            },
            {
                "nurseId": "nurse7",
                "workingStatus": "Allowed"
            },
            {
                "nurseId": "nurse9",
                "workingStatus": "OT"
            },
            {
                "nurseId": "nurse15",
                "workingStatus": "Allowed"
            }
        ],
        "ward2": [{
                "nurseId": "nurse12",
                "workingStatus": "OT"
            },
            {
                "nurseId": "nurse1",
                "workingStatus": "OT"
            },
            {
                "nurseId": "nurse19",
                "workingStatus": "Allowed"
            },
            {
                "nurseId": "nurse18",
                "workingStatus": "Allowed"
            }
        ],
        "ward3": [{
                "nurseId": "nurse21",
                "workingStatus": "Allowed"
            },
            {
                "nurseId": "nurse20",
                "workingStatus": "Allowed"
            },
            {
                "nurseId": "nurse10",
                "workingStatus": "Allowed"
            },
            {
                "nurseId": "nurse22",
                "workingStatus": "Allowed"
            }
        ]
    }];
    predictionModel.find({ algorithmNo: '4'}, function (error, pred) {
    
        if (pred.length == 0) {
            callBack(callBackResponse.callbackWithfalseMessage('Predictions  Not Found'));
        } else {
            //delete User from the database
          
         var temp1 =  setData(resultNew );
                console.log(resultNew);
                var newSchedule = {
                    ward1:temp1[0].ward1,
                    ward2:temp1[1].ward2,
                    ward3:temp1[2].ward3
                }
            
                var temp2 = setData(resultOld );
                console.log(resultOld);
                var oldwSchedule = {
                    ward1:temp2[0].ward1,
                    ward2:temp2[1].ward2,
                    ward3:temp2[2].ward3
                }
            
         
           
            var body = {
                newSchedule:newSchedule,
                oldwSchedule:oldwSchedule
            }
            console.log('body');
            console.log(body);
            callBack( callBackResponse.callbackWithData(body));
        }
    });
};
function setData(data){
    var outPut = [];
    var arr = ["ward1","ward2","ward3"]
    var wardCount = 0;
    for (var key in data[0]){
      var wardObj ={};
      var weeklyNurseArr = [];
      var nurseCount = data[0][arr[wardCount]];
      for(var dayCount=0;dayCount<7;dayCount++){
        var randNurseArr = [];
        var nurseArr = [];
        for(var randCount=0;randCount<4;randCount++){
          var nurseObj ={};
          var x = Math.floor(Math.random() * Math.floor(data[0][key].length));
          
          if(randNurseArr.indexOf(x)>-1)
            randCount--;
          else{
           
            nurseArr.push(data[0][key][x]["nurseId"]);
           
            
            randNurseArr.push(x);
          }
          
        }
        
        weeklyNurseArr.push(nurseArr);
         
      }
      wardObj[key] = weeklyNurseArr;
      outPut.push(wardObj);
      wardCount++;
    }
    console.log(outPut);
    return(outPut)
  }

//Update doctor from the database
module.exports.updatePredictionsByTypeAndAlgirithm = function (body, res, callBack) {
    //find product from the database using user_id
    console.log(body);
    var ward1 = [];
    var ward2 = [];
    var ward3 = [];
    var algorithmobj = {};
    predictionModel.find({ algorithmNo: body.algorithmNo }, function (err, algorithm) {
     

        if (algorithm != undefined) {
if(body.type !='prediction'){
    body.dataNew[0].forEach(function (element) {
        
           ward1.push({
               "nurseId": element[0],
               "workingStatus": element[1]
           });
           // element[0].forEach(function(element1) {
           //     console.log("element");
           //     console.log(element);
           // });

       });
       body.dataNew[1].forEach(function (element) {
       
           ward2.push({
               "nurseId": element[0],
               "workingStatus": element[1]
           });
           // element[0].forEach(function(element1) {
           //     console.log("element");
           //     console.log(element);
           // });

       });
       body.dataNew[2].forEach(function (element) {
         
           ward3.push({
               "nurseId": element[0],
               "workingStatus": element[1]
           });
           // element[0].forEach(function(element1) {
           //     console.log("element");
           //     console.log(element);
           // });

       });
       
       algorithmobj.date = body.date,
       algorithmobj.dataNew = {
           "ward1": ward1,
           "ward2": ward2,
           "ward3": ward3,
       },
       algorithmobj.dataOld = algorithm[0].dataNew,
       algorithmobj.type = body.type,
       algorithmobj.algorithmNo = body.algorithmNo,
       algorithmobj.oldCount = algorithm[0].newCount,
       algorithmobj.newCount = body.newCount

}

algorithmobj.date = body.date,
algorithmobj.type = body.type,
algorithmobj.algorithmNo = body.algorithmNo,
algorithmobj.oldCount = algorithm[0].newCount,
algorithmobj.newCount = body.newCount

           
           

            predictionModel.update({ algorithmNo: body.algorithmNo }, algorithmobj, function (err, data) {
                if (err) {
                    callBack(callBackResponse.callbackWithDefaultError());
                } else {
                    callBack(callBackResponse.callbackWithData(data));
                }
            });


        }
        else {
            callBack(callBackResponse.callbackWithfalseMessage('Predictions does not exist'));

        }
    });
};

/**
 * get all nurses from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.getPredictionsByTypeAndAlgorithm = function (body, res, callBack) {
    //check User is on the database
    predictionModel.find({ algorithmNo: body.algorithmNo }, function (error, data) {
        
        if (error) {
            callBack(callBackResponse.callbackWithfalseMessage(error));
        } else {
            //delete User from the database

            callBack(callBackResponse.callbackWithData(data));
        }
    });

};
/**
 * get all nurses from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.getInputsForOptimization = function (body, res, callBack) {
    //check User is on the database
    var ward1;
    var ward2;
    var ward3;

    patientModel.aggregate(
        [
            { "$group": { _id: "$ward", count: { $sum: 1 } } }
        ]
        , function (error, patients) {
            // console.log(patients);
            if (error) {
                callBack(callBackResponse.callbackWithfalseMessage(error));
            } else {
                //delete User from the database
                nurseWorkingModel.find({}, function (err, result) {
                   
                    patients.forEach(function(element) {
                        
                        if(element._id=="Ward 1"){
                            ward1 = element.count;
                        }else if(element._id=="Ward 2"){
                            ward2 = element.count;
                        }else{
                            ward3 = element.count;
                        }
                    });
                    // console.log(result);
                    // callBack(callBackResponse.callbackWithData({
                    //     "patients": patients,
                    //     "nurses": result    
                    // }));



                });
               
                



            }
        });
        excel();



};
/**
 * get all nurses from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.getInputsForPrediction= function (res, callBack) {
    //check User is on the database
    var ward1;
    var ward2;
    var ward3;
predictionModel.find({algorithmNo:1},function(error,data){
    console.log(data);

    callBack(callBackResponse.callbackWithData(data[0].oldCount));
});


};
function excel(){
       var inputs = [
                        {ward1: 50, ward2: 50,ward3:78},
                    
                    ];
    let writer = new ExcelWriter({
        sheets: [{
            name: 'Test Sheet',
            key: 'tests',
            headers: [{
                name: 'Ward1',
                key: 'ward1'
            }, {
                name: 'Ward2',
                key: 'ward2',
                default: 0
            },
            {
                name: 'Ward3',
                key: 'ward1',
                default: 0
            }]
        }]
    });
    let dataPromises = inputs.map((input) => {
        // 'tests' is the key of the sheet. That is used
        // to add data to only the Test Sheet
        writer.addData('tests', input);
    });
    
        
    Promise.all((dataPromises,reject)=>{
        return writer.save().then((stream) => {
            throw new Error("test error inside");
            dataPromises(true);
            stream.pipe(fs.createWriteStream('data.xlsx'));
           
            callBack(callBackResponse.callbackWithData({}));
        });
    });
    


}



/**
 * delete doctor from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.getNextWeekFreeNurseCount = function (req, res, callBack) {
    //check User is on the database
    var ward1;
    var ward2;
    var ward3;
    var prdiction;
    var total;
    var result;
    var maxPatientCountPerNurse =8;
    nursesModel.find({}, function (error, nurse) {
        // console.log(user);
        algorithmsModel.find({ type: "optimization", status: "true" }, function (error, alg) {
  
            predictionModel.find({algorithmNo:alg[0].algorithmNo}, function (error, prd) {
                    patientModel.find({}, function (error, patient) {
                      
                        ward1= prd[0].dataNew[0].ward1.length;
                        ward2= prd[0].dataNew[0].ward2.length;
                        ward3= prd[0].dataNew[0].ward3.length;
                        total = ward1+ward2+ward3;
                       
                        
                        if( 0 < (total - (Math.round(patient.length / maxPatientCountPerNurse)))){
                            result =(total - (Math.round(patient.length / maxPatientCountPerNurse)));
                            callBack(callBackResponse.callbackWithData({ "nextweekFreeNurses":result }));
                        }else{
                            result = 0;
                            callBack(callBackResponse.callbackWithData({ "nextweekFreeNurses":result }));
                        }




                    });
              

            });

        });


    });
};

