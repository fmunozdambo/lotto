const express = require("express");
const bodyParser = require('body-parser');

const userService = require('../services/userService');
const lotteryService = require('../services/lotteryService');
const ballotService = require('../services/ballotService');
const authService = require('../services/authorizationService');
const cors = require('cors');

const router = express.Router();

router.all('*', cors());

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