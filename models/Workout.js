const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [{
    type: {
        type: String,
        trim: true,
        required: "Exercise cannot be empty"
    },
    name: {
        type: String,
        trim: true,
        required: "Name  cannot be empty"
    },
    duration: {
        type: Number,
        required: "Duration  cannot be empty"
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    },
}],
    day: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
