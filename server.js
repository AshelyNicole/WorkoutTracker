const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express()
app.use(logger("dev"));

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(express.static("public"));
const routes= require("./routes")
app.use(routes)


app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  