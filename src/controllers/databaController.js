const express = require('express');
const router = express.Router();

const databaseService = require('../services/databaseServices')

router.get('/list', databaseService.listDatabases);

module.exports = app => app.use('/database', router)