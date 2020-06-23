
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
 

const app = express()
app.use(logger("dev"));

var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('dotenv').config()
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log('MongoDB database connection established succesfully!')
});

app.use(express.static("public"));
app.use(require("./routes/index"))
app.use(require("./routes/path"))


app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  