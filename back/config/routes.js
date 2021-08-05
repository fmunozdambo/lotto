const express = require("express");
const bodyParser = require('body-parser');

const userService = require('../services/userService');
const lotteryService = require('../services/lotteryService');
const ballotService = require('../services/ballotService');
const authService = require('../services/authorizationService');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Users endpoint
router.post('/users', [
    userService.register
]);
router.get('/users/:id', [
    authService.validJWTNeeded,
    userService.getUser
]);

//Auth endpoint
router.post('/auth', [
    authService.check,
    authService.login
]);


// Lottery endpoint
router.get('/lottery/:date',[
    authService.validJWTNeeded,
    lotteryService.getWinnerByDate
])

//Ballots endpoint
router.post('/ballot/', [
    authService.validJWTNeeded,
    ballotService.create
])

module.exports = router