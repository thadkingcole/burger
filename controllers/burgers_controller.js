// * required modules
const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// TODO create all requried routes and what they do
// home
router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// * export this module
module.exports = router;
