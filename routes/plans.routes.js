const express = require("express");
const router = express.Router();

const Plan = require("../models/Plan.model");
const User = require("../models/User.model");
const Pack = require("../models/Pack.model");

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

    Plan.findById(plansId)
        .populate("author")
        .then(result => res.json(result))
        .catch(err => next(err))
})

router.put("/:plansId/edit", (req, res, next) => {
    const { title, description, images, date } = req.body

    const { plansId } = req.params

    Plan.findByIdAndUpdate(plansId, { title, description, images, date }, { new: true })
        .then(result => res.json(result))
        .catch(err => next(err))

})

router.delete("/:plansId/delete", (req, res, next) => {
    const { plansId } = req.params

    Plan.findByIdAndDelete(plansId)
        .then(response => {
            res.json({ resultado: "ok" })
        })
        .catch(err => next(err))
})






module.exports = router;
