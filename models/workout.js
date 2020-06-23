const mongoose = require("mongoose");
const opts = { toJSON: { virtuals: true } };
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Date,

    exercises: [{
        type: {type:String},
        name: String,
        weight: Number,
        duration: Number,
        distance: Number,
        reps: Number,
        sets: Number
    }],
}, opts);

WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((acc, curr)=> {
        return acc + curr.duration
    },0) 
  });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;