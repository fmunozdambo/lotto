const User = require('../models/user');

exports.getUser = (request, response) => {
    User.getById(request.params.id).then( res => {
        let resrows = res.rows
        if(resrows.length >= 1){
            response.status(200).json(resrows)
        }
        else{
            console.log("Error")
            response.status(400).json("User doesn't exist")
        }
    })
}

exports.register = (request, response) => {
    User.create( new User(request.body.name,request.body.mail,request.body.password)).then( res => {
        let resrows = res.rows
        if(resrows.length >= 1){
            response.status(200).json(resrows)
        }
        else{
            console.log("Error")
            response.status(400).json("User not created")
        }
    })
}