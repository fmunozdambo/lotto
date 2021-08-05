const db = require("../config/db_connection");
const crypto = require("crypto")

function User(name, mail, password){
    this.name = name
    this.mail = mail
    this.password = password
}

async function create(user) {
    let checkRes = await check(user.mail)
    if(checkRes.rows.length == 0){
        let query = "INSERT INTO users (name, mail, password) VALUES ($1, $2, $3) RETURNING id";
        let salt = crypto.randomBytes(16).toString('base64')
        let hash = crypto.createHmac('sha512',salt)
                                        .update(user.password)
                                        .digest("base64")
        user.password = salt + "$" + hash
        let values = [user.name, user.mail, user.password]
        return db.pool.query(query, values)
    }
    else{
        return false
    }
}

async function check(email){
    let query = "SELECT * FROM users WHERE users.mail = $1 LIMIT 1"
    let values = [email]
    return db.pool.query(query, values)
}
async function getById(id){
    let query = "SELECT * FROM users WHERE users.id = $1 LIMIT 1"
    let values = [id]
    return db.pool.query(query, values)
} 
 

module.exports = {
    User: User
}
module.exports.create = create
module.exports.check = check
module.exports.getById = getById