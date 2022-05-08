const express = require('express');
const router = express.Router()

const userService = require('../services/userService');

router.get('/', userService.listUsers);

router.post('/', userService.createUser);

router.put('/', userService.updateUser );

router.delete('/:id/:rev', userService.deleteUser);

module.exports = app => app.use('/users', router)