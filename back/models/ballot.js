const db = require("../config/db_connection");

function Ballot(winner, user, lottery){
    this.winner = winner
    this.fk_user = user
    this.fk_lottery = lottery
}

function create(ballot) {
    let query = "INSERT INTO ballot (winner, fk_user, fk_lottery) VALUES ($1, $2, $3) RETURNING id";
    let values = [ballot.winner, ballot.fk_user, ballot.fk_lottery];
    return db.pool.query(query, values);
}

function createSeveral(ballot, n) {
    let query = "INSERT INTO ballot (winner, fk_user, fk_lottery) VALUES " + "($1, $2, $3),".repeat(n-1) + "($1, $2, $3)" + " RETURNING id";
    let values = [ballot.winner, ballot.fk_user, ballot.fk_lottery];
    return db.pool.query(query, values);
}

module.exports = {
    Ballot: Ballot
}
module.exports.create = create
