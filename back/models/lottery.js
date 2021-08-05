const db = require("../config/db_connection")

function Lottery(date){
    this.date = date
}

function create(lottery) {
    let query = "INSERT INTO lottery (date) VALUES ($1) RETURNING id"
    let values = [lottery.date]
    return db.pool.query(query, values)
}

function getByDate(date) {
    let query = "SELECT * FROM lottery WHERE date = $1 LIMIT 1"
    let values = [date]
    return db.pool.query(query, values)
}

function getWinnerByDate(date){
    let query = `select u.name from users u \
    left outer join ballot b \
    on b.fk_user = u.id \
    inner join lottery l \
    on b.fk_lottery = l.id \
    where b.winner = true \
    and l."date" = $1 `
    let values = [date]
    return db.pool.query(query, values)
}

function get(date){
    let query = `select u.name from users u \
    left outer join ballot b \
    on b.fk_user = u.id \
    inner join lottery l \
    on b.fk_lottery = l.id \
    where b.winner = true \
    and l."date" = $1 `
    let values = [date]
    return db.pool.query(query, values)
}

module.exports = {
    Lottery: Lottery
}
module.exports.create = create
module.exports.getByDate = getByDate
module.exports.getWinnerByDate = getWinnerByDate
