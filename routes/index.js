const router = require("express").Router()
// const workoutSeed= require("../seeders/stubs.js")
const db = require("../models")

router.get("/api/workouts", (req, res)=>{
    db.Workout.find({})
        .then(dbExercise => {
            console.log(dbNote)
            res.json(dbNote);
          })
          .catch(err => {
            res.json(err);
          });
          
    // res.json(workoutSeed)//STUB
    
})

router.get("/api/workouts", (req, res)=>{
    db.Workout.find({})
        .then(dbNote => {
            console.log(dbNote)
            res.json(dbNote);
          })
          .catch(err => {
            res.json(err);
          });
          
    // res.json(workoutSeed)//STUB
    
})
module.exports= router