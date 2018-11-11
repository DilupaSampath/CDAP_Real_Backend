'use strict'
//Import Express
const express = require('express');
//user router
const router = express.Router();
//Import body parser
const bodyParser = require('body-parser');

// router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//import validator Schemas 
const doctorSchema = require('../src/doctor/doctorSchema');
const nurseSchema = require('../src/nurse/nurseSchema');
const patientSchema = require('../src/patient/patientSchema');

//import Validator class
const validator = require('../validators/validator');

//import controllers
const doctorContraller = require('../src/doctor/doctorContraller');
const nurseContraller = require('../src/nurse/nurseContraller');
const patientContraller = require('../src/patient/patientContraller');
const algorithmsContraller = require('../src/algorithms/algorithmsContraller');
const predictionsContraller = require('../src/predictions/predictionsContraller');

//doctor routes
router.route('/api/doctor/new').post(validator.validateBody(doctorSchema.newDoctor) ,doctorContraller.addDoctor);
router.route('/api/doctor/update').post(validator.validateBody(doctorSchema.updateDoctor) ,doctorContraller.updateDoctor);
router.route('/api/doctor/remove').post(validator.validateBody(doctorSchema.removeDoctor) ,doctorContraller.removeDoctor);
router.route('/api/doctor/getAll').get(doctorContraller.getAllDoctors);

//nurse routs
router.route('/api/nurse/new').post(validator.validateBody(nurseSchema.newNurse) ,nurseContraller.addNurse);
router.route('/api/nurse/update').post(validator.validateBody(nurseSchema.updateNurse) ,nurseContraller.updateNurse);
router.route('/api/nurse/remove').post(validator.validateBody(nurseSchema.removeNurse) ,nurseContraller.removeNurse);
router.route('/api/nurse/getAll').get(nurseContraller.getAllNurses);
router.route('/api/nurse/addWarkingTable').post(nurseContraller.addNewNurseToWarkingTable);
router.route('/api/nurse/addWarkingTableUpdate').post(nurseContraller.updateNurseToWarkingTable);

//patient routs
router.route('/api/patient/new').post(validator.validateBody(patientSchema.newPatient) ,patientContraller.addPatient);
router.route('/api/patient/update').post(validator.validateBody(patientSchema.updatePatient) ,patientContraller.updatePatient);
router.route('/api/patient/remove').post(validator.validateBody(patientSchema.removePatient) ,patientContraller.removePatient);
router.route('/api/patient/getAll').get(patientContraller.getAllPatient);
router.route('/api/patient/getLastWeek').get(patientContraller.getLastWeekPatientCounts);
router.route('/api/patient/getPatientCountGroupByDistrict').get(patientContraller.getPatientCountGroupByDistrict);
router.route('/api/patient/getPatientCountGroupByWard').get(patientContraller.getPatientCountGroupByWard);
router.route('/api/patient/getPatientNextWeekPatientCountForEachWard').get(patientContraller.getPatientNextWeekPatientCountForEachWard);

//Prediction routes
router.route('/api/predictions/get').post(predictionsContraller.getPredictionsByTypeAndAlgorithm);
router.route('/api/predictions/update').post(predictionsContraller.updatePredictionsByTypeAndAlgirithm);
router.route('/api/predictions/remove').post(predictionsContraller.removePredictionsByTypeAndAlgirithm);
router.route('/api/predictions/new').post(predictionsContraller.newPredictions);
router.route('/api/predictions/getInputsForOptimization').get(predictionsContraller.getInputsForOptimization);
router.route('/api/predictions/getNextWeekFreeNurseCount').get(predictionsContraller.getNextWeekFreeNurseCount);

//Algorithm routes
router.route('/api/algorithm/new').post(algorithmsContraller.addAlgorithm);
router.route('/api/algorithm/update').post(algorithmsContraller.updateAlgorithm);
router.route('/api/algorithm/remove').post(algorithmsContraller.removeAlgorithm);
router.route('/api/algorithm/getAll').get(algorithmsContraller.getAllAlgorithms);
router.route('/api/algorithm/compairPastData').post(algorithmsContraller.compairPastData);
router.route('/api/algorithm/addData').post(algorithmsContraller.addData);

module.exports = router;