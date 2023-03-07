const express = require("express");
const router = express.Router();

// ℹ️ Handles password encryption
const bcrypt = require("bcrypt");

// ℹ️ Handles password encryption
const jwt = require("jsonwebtoken");

// Require the User model in order to interact with the database
const User = require("../models/User.model");

// Require necessary (isAuthenticated) middleware in order to control access to specific routes
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

// How many rounds should bcrypt run the salt (default - 10 rounds)
const saltRounds = 10;

// GET ALL PACKS
router.get("/", (req,res,next) => {
    res.json("list ok")
})

//POST CREATED PACK
router.post("/create", (req,res,next) => {
    res.json("pack create")
})

//GET ONE PACK
router.get("/:planId", (req,res,next) => {
    res.json("pack detail")

})

//PUT EDIT PACK
router.put("/:planId/edit", (req,res,next) => {
    res.json("pack edit")

})

//DELETE PACK
router.delete("/:planId/delete", (req,res,next) => {
    res.json("pack delete")
})

module.exports = router;
