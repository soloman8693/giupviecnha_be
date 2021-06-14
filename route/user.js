const express = require('express');
const urlRoutes = express.Router();

const controller = require('../controller/UserController');

urlRoutes.get('/', controller.getUser);

module.exports = urlRoutes;
