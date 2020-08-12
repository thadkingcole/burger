// * required modules
const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// TODO create all requried routes and what they do
// home
router.get("/", (req, res) => {
  // get all burgers from database & pass them to client
  burger.all((data) => {
    const hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// add a burger to the database
router.post("/api/burgers", (req, res) => {
  burger.create(req.body, (result) => {
    // send back ID of new burger
    res.json({ id: result.insertId });
  });
});

// * export this module
module.exports = router;
