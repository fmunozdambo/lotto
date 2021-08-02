const db = require("../config/db_connection");

function create(user) {
    let query = "INSERT INTO users (name, mail, password) VALUES ($1, $2, $3) RETURNING id";
    let values = [user.name, user.mail, user.password];
    return db.pool.query(query, values);
}

async function check(name, password){
    let query = "SELECT COUNT(1) FROM users WHERE users.name = $1 AND users.password = $2";
    let values = [name, password];
    return db.pool.query(query, values);
}

async function getByName(name){
    let query = "SELECT * FROM users WHERE users.name = $1 LIMIT 1";
    let values = [name];
    return db.pool.query(query, values);
}

module.exports.create = create
module.exports.check = check
module.exports.getByName = getByName

// async function getPerson(personId) {
//   const text = `SELECT * FROM users WHERE id = $1`;
//   const values = [personId];
//   return pool.query(text, values);
// }

// async function updatePerson(personId, value) {
//   const text = `UPDATE users SET name = $2 WHERE id = $1`;
//   const values = [personId, value];
//   return pool.query(text, values);
// }

// async function removePerson(personId) {
//   const text = `DELETE FROM users WHERE id = $1`;
//   const values = [personId];
//   return pool.query(text, values);
// }