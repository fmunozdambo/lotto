const Lottery = require('../models/lottery');

exports.create = (request, response) => {
    Lottery.create(request.body.lottery).then( res => {
        let resrows = res.rows
        if(resrows.length >= 1){
            response.status(200).json(resrows)
        }
        else{
            console.log("Error")
            response.status(400).json("Lottery not created")
        }
    })
}

exports.getByDate = (request, response) => {
    Lottery.getByDate( request.params.date).then( res => {
        let resrows = res.rows
        if(resrows.length >= 1){
            response.status(200).json(resrows)
        }
        else{
            console.log("Error")
            response.status(400).json("Lottery doesn't exist")
        }
    })
}

exports.getWinnerByDate = (request, response) => {
    Lottery.getWinnerByDate( request.params.date).then( res => {
        let resrows = res.rows
        if(resrows.length >= 1){
            response.status(200).json(resrows)
        }
        else{
            console.log("Error")
            response.status(400).json("There isn't a winner")
        }
    })
}
