const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

const isCompany = require("../middleware/isCompany.middleware.js");


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
    console.log(req.payload)

    const { title, description, images, fromDate, toDate, destination, price } = req.body
    Pack.create({ title, description, images, fromDate, toDate, destination, price })
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
    /* console.log(packId) */
    Pack.findById(packId)
        .then(response => {
            /* console.log(response) */
            return res.json(response)
        })
        .catch(err => console.log(err))
})

//POST TO JOIN IN A TRIP
router.post("/:packId/join", isAuthenticated, (req, res, next) => {
    const { packId } = req.params
    const userId = req.payload._id

    Plan.findById(packId)
        .then(response => {
            console.log(response.id)
            return (User.findByIdAndUpdate(userId, { $push: { packsEnrolled: response } }))
        })
        .then(response => {
            console.log(response)
            return (Pack.findByIdAndUpdate(packId, { $push: { participants: response } }))

        })
        .catch(err => next(err))
})


//PUT EDIT PACK
router.put("/:packId/edit", isAuthenticated, isCompany, (req, res, next) => {
    const { packId } = req.params;
    const { title, description, images, fromDate, toDate, destination, price } = req.body;

    Pack.findByIdAndUpdate(packId, { title, description, images, fromDate, toDate, destination, price })
        .then(result => {
            res.json(result);
        })
        .catch(err => next(err))

})

//DELETE PACK
router.delete("/:packId/delete", isAuthenticated, isCompany, (req, res, next) => {
    const { packId } = req.params;
    Pack.findByIdAndDelete(packId)
        .then(response => {
            res.json({ resultado: "ok" });
        })
        .catch(err => next(err))
})

module.exports = router;
