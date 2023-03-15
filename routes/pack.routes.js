const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

const User = require("../models/User.model");
const Pack = require("../models/Pack.model");
const Plan = require("../models/Plan.model");


// GET ALL PACKS
router.get("/", (req, res, next) => {
    Pack.find()
        .populate("author")
        .then(response => {
            res.json(response)
        })
        .catch(err => console.log(err))
})

//POST CREATED PACK
router.post("/create", isAuthenticated, (req, res, next) => {
    const userId = req.payload._id

    const { title, description, images, fromDate, toDate, itinerary, destination, price } = req.body
    Pack.create({ title, description, images, fromDate, toDate, itinerary, destination, price })
        .then(response => {
            User.findByIdAndUpdate(userId, { $push: { packsMade: response } })
                .then((response) => {
                    res.json({ result: "ok" })
                })
                .catch(err => next(err))
        })
        .catch(err => next(err))
})

//GET ONE PACK
router.get("/:packId", (req, res, next) => {
    const { packId } = req.params
    Pack.findById(packId)
        .then(response => {
            return res.json(response)

        })
        .catch(err => console.log(err))
})

//PUT EDIT PACK
router.put("/:packId/edit", (req, res, next) => {
    const { packId } = req.params;
    const { title, description, images, fromDate, toDate, itinerary, destination, price } = req.body;

    Pack.findByIdAndUpdate(packId, { title, description, images, fromDate, toDate, itinerary, destination, price }, { new: true })
        .then(result => {
            res.json(result);
        })
        .catch(err => next(err))

})

//DELETE PACK
router.delete("/:packId/delete", (req, res, next) => {
    const { packId } = req.params;
    Pack.findByIdAndDelete(packId)
        .then(response => {
            res.json({ resultado: "ok" });
        })
        .catch(err => next(err))
})

module.exports = router;
