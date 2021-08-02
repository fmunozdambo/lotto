const db = require("../config/db_connection");

function create(lottery) {
    let query = "INSERT INTO lottery (date) VALUES ($1) RETURNING id";
    let values = [lottery.date];
    return db.pool.query(query, values);
}

function getByDate(date) {
    let query = "SELECT * FROM lottery WHERE date = $1 LIMIT 1";
    let values = [date];
    return db.pool.query(query, values);
}

module.exports.create = create
module.exports.getByDate = getByDate