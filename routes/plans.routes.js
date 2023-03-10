const express = require("express");
const router = express.Router();
const fileUploader = require("../config/cloudinary.config");

const Plan = require("../models/Plan.model");
const User = require("../models/User.model");
const Pack = require("../models/Pack.model");



router.get("/", (req, res, next) => {
    Plan.find()
        .then(results => res.json(results))
        .catch(err => next(err))
});

router.post("/create", fileUploader.any(), (req, res, next) => {
    console.log("REQ.FILE", req.file)
    console.log("REQ.FILES", req.files)
    console.log("REQ.BODY", req.body)
    if (!req.file) {
        next(new Error("No file uploaded!"))
        return
    }

    const fileUrl = req.file.path

    const { title, description, date } = req.body

    console.log(req.body)
    Plan.create({ title, description, images: fileUrl, date })
        .then(response => {
            console.log(response)
            res.json({ result: "ok" })
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
            res.json({ result: "ok" })
        })
        .catch(err => next(err))
})






module.exports = router;
