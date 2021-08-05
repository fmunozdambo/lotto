const Ballot = require('../models/ballot');

exports.create = (request, response) => {
    if(request.body.n == 1){
        Ballot.create( new Ballot(false,request.body.user,request.body.lottery)).then( res => {
            let resrows = res.rows
            if(resrows.length >= 1){
                response.status(200).json(resrows)
            }
            else{
                console.log("Error")
                response.status(400).json("Ballot not created")
            }
        })
    }
    else if(n > 1){
        Ballot.createSeveral( new Ballot(false,request.body.user,request.body.lottery), request.body.n).then( res => {
            let resrows = res.rows
            if(resrows.length >= 1){
                response.status(200).json(resrows)
            }
            else{
                console.log("Error")
                response.status(400).json("Ballots not created")
            }
        })
    }
    else{
        console.log("N < 1")
    }
}