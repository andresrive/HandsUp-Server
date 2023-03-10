const express = require("express");
const fileUploader = require("../config/cloudinary.config");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");

});

router.get("/profile", (req, res, next) => {
  res.json("This is the profile")
})

router.post("/profile", (req, res, next) => {     //editar
  res.json("This is the profile")
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
