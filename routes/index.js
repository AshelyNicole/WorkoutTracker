const router = require("express").Router()
const db = require("../models/workout.js")
const { Workout } = require("../models/index.js")

router.post('/api/workoutes', (req, res) => {
  Workout.create({})
    .then(dbFitnessTracker => {
      res.json(dbFitnessTracker)
    })
    .catch(err => {
      res.json(err)
    })
})

router.put("/api/workouts/:id", ({ body, params}, res) => {
  worekout.findByIdAndUpdate(
    params.id,
    {$push: {exercises: body}},
    {new: true, runValidators: true}
  )
  .then(dbFitnessTracker => {
    res.json(dbFitnessTracker)
  })
  .catch(err => {
    res.json(err)
  })
})

router.get("/api/workouts", (req, res)=>{
  Workout.find({})
    .then(dbFitnessTracker => {
      console.log(dbFitnessTracker)
      res.json(dbFitnessTracker);
    })
    .catch(err => {
      res.json(err);
    });  
})

router.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true)
    })
    .catch(err => {
      res.json(err)
    })
})


module.exports= router