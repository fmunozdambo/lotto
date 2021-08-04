const express = require("express");
const bodyParser = require('body-parser');
const userService = require('../services/userService');
const ballotService = require('../services/ballotService');
const lotteryService = require('../services/lotteryService');
const User = require('../models/user').User;
const Ballot = require('../models/ballot').Ballot;
const Lottery = require('../models/lottery').Lottery;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', function(req, res) {
 respuesta = {
  error: true,
  codigo: 200,
  mensaje: 'Punto de inicio'
 };
 res.send(respuesta);
});

// Users endpoint
app.get('/users/:name', function(request, response){
    userService.getByName(request.params.name).then( res => {
        let resrows = res.rows
        if(resrows.length >= 1){
            response.status(200).json(resrows)
        }
        else{
            console.log("Error")
            response.status(400).json("User doesn't exist")
        }
    })
})

app.post('/register', function(request, response){
    console.log(request.body)
    userService.create( new User(request.body.name,request.body.mail,request.body.password)).then( res => {
        let resrows = res.rows
        if(resrows.length >= 1){
            response.status(200).json(resrows)
        }
        else{
            console.log("Error")
            response.status(400).json("User not created")
        }
    })
})

app.post('/login', function(request, response){
    userService.check( request.body.name, request.body.password).then( res => {
        let resrows = res.rows
        if(resrows.length >= 1){
            response.status(200).json(resrows)
        }
        else{
            console.log("Error")
            response.status(400).json("Name/Password are wrong")
        }
    })
})

// Ballot endpoint
app.post('/ballot/', function(request, response){
    if(request.body.n == 1){
        ballotService.create( new Ballot(false,request.body.user,request.body.lottery)).then( res => {
            let resrows = res.rows
            if(resrows.length >= 1){
                response.status(200).json(resrows)
            }
            else{
                console.log("Error")
                response.status(400).json("Ballot created")
            }
        })
    }
    else if(n > 1){
        ballotService.createSeveral( new Ballot(false,request.body.user,request.body.lottery), request.body.n).then( res => {
            let resrows = res.rows
            if(resrows.length >= 1){
                response.status(200).json(resrows)
            }
            else{
                console.log("Error")
                response.status(400).json("Ballots created")
            }
        })
    }
    else{
        console.log("N < 1")
    }
});

// Lottery endpoint
app.get('/lottery/:date', function(request, response){
    lotteryService.getWinnerByDate( request.params.date).then( res => {
        let resrows = res.rows
        if(resrows.length >= 1){
            response.status(200).json(resrows)
        }
        else{
            console.log("Error")
            response.status(400).json("Doesn't have a winner")
        }
    })
})

app.post('/lottery', lotteryService.create)

app.listen(8080, () => {
 console.log("App listening on port 8080");
});
