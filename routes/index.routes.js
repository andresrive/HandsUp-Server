
const express = require("express");
const fileUploader = require("../config/cloudinary.config");
const router = express.Router();
const User = require("../models/User.model")
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/profile", isAuthenticated, (req, res, next) => {
  const userId = req.payload._id
  console.log(`This is the profile for ${userId}`)
  User.findById(userId)
    .then(results => res.json(results))
    .catch(err => next(err))
})

router.put("/profile", isAuthenticated, (req, res, next) => {     //editar

  const userId = req.payload._id

  console.log("USER ID!!!!!!", userId)

  const { username, email, avatarUrl } = req.body
  console.log("REQ BODY: ", req.body)
  User.findByIdAndUpdate(userId, { username, email, images: avatarUrl }, { new: true })
    .then(result => {
      console.log("RESULT: ", result)
      res.json(result)
    })
    .catch(err => next(err))
})

router.delete("/profile", isAuthenticated, (req, res, next) => {          //BORRAR PERFIL

  const userId = req.payload._id

  User.findByIdAndDelete(userId)
    .then(response => {
      res.json({ result: "ok" })
    })
    .catch(err => next(err))
})

router.post("/upload", fileUploader.single("images"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  console.log(req.files)
  res.json({ fileUrl: req.file.path });
})

module.exports = router;
