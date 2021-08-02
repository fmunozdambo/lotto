const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const User = require('./models/user').User;
const Ballot = require('./models/ballot').Ballot;
const Lottery = require('./models/lottery').Lottery;
const userService = require('./services/userService');
const ballotService = require('./services/ballotService');
const lotteryService = require('./services/lotteryService');
//
(async () => {
  testuser = new User("testAll","test@test.com","secret")
  testLottery = new Lottery(new Date())
  // let res = await userService.create(testuser)
  //let res2 = await lotteryService.create(testLottery)

  let res_userDB = await userService.getByName("testAll")
  let res_lottoDB = await lotteryService.getByDate(new Date())
  let userDB = res_userDB.rows[0]
  let lottoDB = res_lottoDB.rows[0]
  if(lottoDB != undefined){
    testBallot = new Ballot(false,userDB,lottoDB);
    let res3 = await ballotService.create(testBallot)
  }
  else{
    console.log("Doesn't exist")
  }
  
})();
