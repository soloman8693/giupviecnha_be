const express = require('express');
const urlRoutes = express.Router();

const controller = require('../controller/EmployeeController');

urlRoutes.get('/', controller.getEmployee);
urlRoutes.post('/', controller.add);
module.exports = urlRoutes;
