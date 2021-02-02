const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();

//4 Create the schema
const User = require("./model/User");

//3 SETUP ENV VARIABLES
require("dotenv").config({ path: "./config/.env" });

//PARSE THE DATA TO JSON
app.use(express.json());

//2 connect the db
connectDB();

/****************************************start the CRUD *********************************************************/
//get all users path:/api/users

app.get("/api/users", (req, res) => {
  User.find()
    .then((users) => res.send(users))
    .catch((err) => res.send(err));
});

//get user by id path:/api/user/:userId
app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .then((user) => res.send(user))
    .catch((err) => res.send(err));
});

//ADD a user path:/api/add_user
app.post("/api/add_user", (req, res) => {
  const { name, lastName, email, phone } = req.body;
  const newUser = new User({ name, lastName, email, phone });
  newUser
    .save()
    .then((user) => res.send(user))
    .catch((err) => res.send(err));
});

//Edit User by id path:/api/users/:id
app.put("/api/users/:userId", (req, res) => {
  const userId = req.params.userId;
  User.findByIdAndUpdate(userId, { ...req.body }, { new: true })
    .then((user) => res.send(user))
    .catch((err) => res.status(400).send(err));
});

//DELETE USER BY ID PATH:/api/users/:id
app.delete("/api/users/:userId", (req, res) => {
  const userId = req.params.userId;
  User.findByIdAndDelete(userId)
    .then((user) => res.send(user))
    .catch((err) => res.send(err));
});

/*****************************************End the CRUD **********************************************************/

//1start the server
const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  err
    ? console.error(err)
    : console.log(`the server is running on port: ${PORT}`);
});
