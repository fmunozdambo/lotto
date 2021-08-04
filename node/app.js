const express = require('express')
const bodyParser = require('body-parser')
const schedule = require('node-schedule')

const User = require('./models/user').User;
const Ballot = require('./models/ballot').Ballot;
const Lottery = require('./models/lottery').Lottery;
const userService = require('./services/userService');
const ballotService = require('./services/ballotService');
const lotteryService = require('./services/lotteryService');
const serverAPI = require('./api/serverAPI');

(async () => {
  schedule.scheduleJob('0 0 * * *', () => { 
    lotteryService.create(new Date())
  })

  testuser = new User("felix","test@test.com","secret")
  testLottery = new Lottery(new Date())
  // let res = await userService.create(testuser)
  // let res2 = await lotteryService.create(testLottery)

  let res_userDB = await userService.getByName("felix")
  let res_lottoDB = await lotteryService.getByDate(new Date())
  let userDB = res_userDB.rows[0]
  console.log(userDB)
  let lottoDB = res_lottoDB.rows[0]
  console.log(lottoDB)
  if(lottoDB != undefined){
    // testBallot = new Ballot(false,userDB.id,lottoDB.id);
    // let res3 = await ballotService.create(testBallot)
    let winner = await lotteryService.getWinnerByDate(new Date())
    console.log(winner.rows[0].name)
  }
  else{
    console.log("Doesn't exist")
  }
  
})();
