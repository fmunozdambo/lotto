const { Pool, Client } = require("pg");

const pool = new Pool();
const client = new Client();

async function createUser(user) {
  let query = "INSERT INTO users (name, mail, password) VALUES ($1, $2, $3) RETURNING id";
  let values = [user.name, user.mail, user.password];
  return pool.query(query, values);
}

async function checkUser(name, password){
  let query = "SELECT COUNT(1) FROM users WHERE users.name = $1 AND users.password = $2";
  let values = [name, password];
  return pool.query(query, values);
}

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

(async () => {
  console.log("starting")
  
  // let res = await createUser({
  //   name: "user_test",
  //   mail: "test@test.com",
  //   password: "secret"
  // });
  // const personId = res.rows[0]["id"];
  // console.log("Registered a person with id: " + personId);

  let res2 = await checkUser("user_test","secret");
  console.log(res2)
  if(res2.rows[0]["count"] == 1){
    console.log("Exists")
  }
  else{
    console.log("Doesn't exist")
  }

  await pool.end();
})();
