const crypto = require('crypto');
const jwt = require('jsonwebtoken')
const User = require('../models/user');

exports.check = (request, response, next) => {
    User.check(request.body.mail).then( res => {
        let resrows = res.rows
        if(resrows.length >= 1){
            let passwordFields = resrows[0].password.split('$');
            let salt = passwordFields[0];
            let hash = crypto.createHmac('sha512', salt).update(request.body.password).digest("base64");
            if (hash === passwordFields[1]) {           
                request.body = {
                    id: resrows[0].id,
                    email: resrows[0].mail,
                    name: resrows[0].name,
                };
                return next();
            }
            else{
                return response.status(400).json({errors: ['Invalid password']})
            }
        }
        else{
            console.log("Error")
            return response.status(400).json({errors: ['Invalid email']})
        }
    })
}

exports.login = (request, response) => {
    try {
        let refreshId = request.body.id + "not so secret";
        console.log(refreshId)
        let salt = crypto.randomBytes(16).toString('base64');
        let hash = crypto.createHmac('sha512', salt).update(refreshId).digest("base64");
        request.body.refreshKey = salt;
        let token = jwt.sign(request.body, "not so secret");
        let b = Buffer.from(hash);
        let refresh_token = b.toString('base64');
        response.status(201).send({accessToken: token, refreshToken: refresh_token});
    } catch (err) {
        console.log(err)
        response.status(500).send({errors: err});
    }
 };

 exports.validJWTNeeded = (req, res, next) => {
    if (req.headers['authorization']) {
        try {
            let authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send();
            } else {
                req.jwt = jwt.verify(authorization[1], secret);
                return next();
            }
        } catch (err) {
            return res.status(403).send();
        }
    } else {
        return res.status(401).send();
    }
}; 