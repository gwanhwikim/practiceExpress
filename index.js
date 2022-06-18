const express = require("express");
const app = express();

const mysql = require("mysql");

const admin = require("firebase-admin");

let serviceAccount = require("./firebase-admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dk1234",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connected");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/push", async (req, res) => {
  console.log(req.body);
  let message = {
    notification: {
      title: req.query.title,
      body: req.query.content,
    },
    token: req.query.token,
  };

  admin
    .messaging()
    .send(message)
    .then(function (res) {
      console.log("success sent message : ", res);
    })
    .catch(function (err) {
      console.log("err : ", err);
    });
});

app.listen(3000);
