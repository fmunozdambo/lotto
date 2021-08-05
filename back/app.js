const express = require('express')
const bodyParser = require('body-parser')
const schedule = require('node-schedule')

const User = require('./models/user');
const Ballot = require('./models/ballot');
const Lottery = require('./models/lottery');
const routes = require("./config/routes");
const automaticService = require('./services/automaticService');

const app = express();
const cors = require('cors');

app.use(routes)

// use it before all route definitions
app.use(cors());

app.listen(8080, () => {
    console.log("App listening on port 8080");
});


//Test
(async () => {
  // testuser1 = new User.User("felix","test1@test.com","secret1")
  // testuser2 = new User.User("carlos","test2@test.com","secret2")
  // testuser3 = new User.User("dani","test3@test.com","secret3")
  // testLottery = new Lottery.Lottery(new Date())
  //  let res2 = await Lottery.create(testLottery)

  // await User.create(testuser1)
  // await User.create(testuser2)
  // await User.create(testuser3)

  // let res_userDB1 = await User.getById(1)
  // let res_userDB2 = await User.getById(2)
  // let res_userDB3 = await User.getById(3)
  // let res_lottoDB = await Lottery.getByDate(new Date())
  // let lottoDB = res_lottoDB.rows[0]

  // if(lottoDB != undefined){
  //   testBallot1 = new Ballot.Ballot(false,res_userDB1.rows[0].id,lottoDB.id);
  //   testBallot2 = new Ballot.Ballot(false,res_userDB2.rows[0].id,lottoDB.id);
  //   testBallot3 = new Ballot.Ballot(false,res_userDB3.rows[0].id,lottoDB.id);
  //   let res1 = await Ballot.createSeveral(testBallot1, 10)
  //   let res2 = await Ballot.createSeveral(testBallot2, 5)
  //   let res3 = await Ballot.createSeveral(testBallot3, 5)
  // //   let winner = await Lottery.getWinnerByDate(new Date())
     
  // //   automaticService.DrawWinner(new Date())
  // }
  // else{
  //   console.log("Doesn't exist")
  // }
  
})();
