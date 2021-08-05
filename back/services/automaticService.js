const schedule = require('node-schedule')
const Ballot = require('../models/ballot');
const { Lottery } = require('../models/lottery');
const lotteryService = require('./lotteryService');

schedule.scheduleJob('0 0 * * *', () => { 
    let today = new Date()
    try{
        DrawWinner(today)
    }
    catch{
        console.log("Couldn't draw a winner")
    }
    Lottery.create(new Lottery.Lottery(today))
  })

function DrawWinner(date){
    Ballot.getAllByDate(date).then( res => {
        let ballots = res.rows
        let winner = ballots[Math.floor((Math.random()*ballots.length))]
        Ballot.setWinner(winner.id)
    })
}