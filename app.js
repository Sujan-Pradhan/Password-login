const express = require("express");
require("dotenv").config();
const expressLayout = require("express-ejs-layouts");

const db = require("./database/connection");
const bodyParser = require("body-parser");

const app = express();

const homeRoute = require("./routes/index");
const loginRegRoute = require("./routes/users");
//Middleware
//EJS
app.use(expressLayout);
app.set("view engine", "ejs");

//bodyparser
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/", homeRoute);
app.use("/users", loginRegRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
