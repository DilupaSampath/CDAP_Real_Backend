const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("./userModel");

const callBackResponse = require('../../services/callBackResponseService');
/**
 * get all nurses from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.loginUser= function (body,res, callBack) {
    //check User is on the database
  

    User.find({ email:body.email })
    .exec()
    .then(user => {
        console.log(user);
if(!user.length>0){
    callBack(callBackResponse.callbackWithfalseMessage("finding Error"));
}else{
    callBack(callBackResponse.callbackWithData(user));
}

       
        
    });



};




/**
 * get all nurses from the database
 * @param {*} user_id 
 * @param {*} res 
 * @param {*} callBack 
 */
module.exports.createUser= function (body,res, callBack) {
    //check User is on the database
    var ward1;
    var ward2;
    var ward3;

    User.find({ email:body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: body.email,
              password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });



};


// router.post("/signup", (req, res, next) => {
//     User.find({ email: req.body.email })
//       .exec()
//       .then(user => {
//         if (user.length >= 1) {
//           return res.status(409).json({
//             message: "Mail exists"
//           });
//         } else {
//           bcrypt.hash(req.body.password, 10, (err, hash) => {
//             if (err) {
//               return res.status(500).json({
//                 error: err
//               });
//             } else {
//               const user = new User({
//                 _id: new mongoose.Types.ObjectId(),
//                 email: req.body.email,
//                 password: hash
//               });
//               user
//                 .save()
//                 .then(result => {
//                   console.log(result);
//                   res.status(201).json({
//                     message: "User created"
//                   });
//                 })
//                 .catch(err => {
//                   console.log(err);
//                   res.status(500).json({
//                     error: err
//                   });
//                 });
//             }
//           });
//         }
//       });
//   });
  