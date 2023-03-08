const express = require("express");
const router = express.Router();

const Plan = require("../models/Plan.model")

router.get("/", (req, res, next) => {
    Post.find()
        .then(results => res.json(results))
        .catch(err => next(err))
});

router.post("/create", (req, res, next) => {

    const { title, description, images, date } = req.body

    Post.create({ title, description, images, date })
        .then(response => {
            console.log(response)
            res.json({ result: ok })
        })
        .catch(err => next(err))

})

router.get("/:plansId", (req, res, next) => {

    const { plansId } = req.params

    Post.findByIdAndUpdate({})

    res.json("Get a single plan")
})

router.put("/:plansId/edit", (req, res, next) => {
    
    res.json("Edit a plan")
})

router.delete("/:plansId/delete", (req, res, next) => {
    res.json("Delete a plan")
})






module.exports = router;
