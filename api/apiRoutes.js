const router = require("express").Router();
const db = require("../models");

router.get("/workouts", (_, res) => {
    db.Workout.find({})
        .sort({ day: 1 })
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
});

router.post("/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id,
        {
            $push: {
                exercises: req.body,
            },
        },
        {
            new: true,
        }
    )
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        })
});

router.get("/workouts/range", (_, res) => {
    db.Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
    }]).sort({ day: -1 })
        .limit(7)
        .then(workout => {
            res.json(workout)
        })
        .catch(err => {
            res.json(err);
        })
});






module.exports = router;