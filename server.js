
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
 

const app = express()
app.use(logger("dev"));

var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.ATLAS_URI || "mongodb://localhost/dbFitnessTracker", { useNewUrlParser: true })


app.use(require("./routes/index"))
app.use(require("./routes/path"))


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}` );
  });
  