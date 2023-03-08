const express = require("express");
const router = express.Router();

// ℹ️ Handles password encryption
const jwt = require("jsonwebtoken");

// Require the User model in order to interact with the database
const User = require("../models/User.model");
const Pack = require("../models/Pack.model");

// Require necessary (isAuthenticated) middleware in order to control access to specific routes
const { isAuthenticated } = require("../middleware/jwt.middleware.js");


// GET ALL PACKS
router.get("/", (req,res,next) => {
    Pack.find()
    .then(response => {
        res.json(response)
    })
    .catch(err => console.log(err))
})

//POST CREATED PACK
router.post("/create", (req,res,next) => {
    const {title, description, images, date, itinerary, destination, price} = req.body
    Pack.create({title, description, images, date, itinerary, destination, price})
    .then(response => {
        res.json("pack create")
    })
    .catch(err => console.log(err))
})

//GET ONE PACK
router.get("/:packId", (req,res,next) => {
    const {planId} = req.params
    Pack.findById(planId)
    .then(response => {
        return res.json(response)

    })
    .catch(err => console.log(err))
})

//PUT EDIT PACK
router.put("/:packId/edit", (req,res,next) => {
    const {planId} = req.params
    Pack.findByIdAndUpdate (planId, )
    res.json("pack edit")
    
})

//DELETE PACK
router.delete("/:packId/delete", (req,res,next) => {
    res.json("pack delete")
})

module.exports = router;
