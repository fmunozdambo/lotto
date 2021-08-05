const express = require('express')
const bodyParser = require('body-parser')
const schedule = require('node-schedule')

const User = require('./models/user');
const Ballot = require('./models/ballot');
const Lottery = require('./models/lottery');
const userService = require('./services/userService');
const ballotService = require('./services/ballotService');
const lotteryService = require('./services/lotteryService');
const routes = require("./config/routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes)

app.listen(8080, () => {
    console.log("App listening on port 8080");
});

(async () => {
  // schedule.scheduleJob('0 0 * * *', () => { 
  //   lotteryService.create(new Date())
  // })

   testuser = new User.User("felix","test3@test.com","secret")
  // testLottery = new Lottery(new Date())
  //let res = await User.create(testuser)
  // // let res2 = await lotteryService.create(testLottery)

  // let res_userDB = await userService.getUser("test@test.com")
  // let res_lottoDB = await lotteryService.getByDate(new Date())
  // let lottoDB = res_lottoDB.rows[0]
  // if(lottoDB != undefined){
  //   // testBallot = new Ballot(false,userDB.id,lottoDB.id);
  //   // let res3 = await ballotService.create(testBallot)
  //   let winner = await lotteryService.getWinnerByDate(new Date())
  //   console.log(winner.rows[0].name)
  // }
  // else{
  //   console.log("Doesn't exist")
  // }
  
})();
