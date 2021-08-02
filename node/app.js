const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./config/db_connection');
//
(async () => {
  console.log("starting")
  testuser = new User("test","test@test.com","secret");
  let res = await User.create(testuser);
  // let res = await createUser({
  //   name: "user_test",
  //   mail: "test@test.com",
  //   password: "secret"
  // });
  // const personId = res.rows[0]["id"];
  // console.log("Registered a person with id: " + personId);
  //
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
