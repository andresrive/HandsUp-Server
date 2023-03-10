const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");

});

router.get("/profile", (req, res, next) => {
  res.json("This is the profile")
})

router.post("/profile", (req, res, next) => {
  res.json("This is the profile")
})

module.exports = router;
