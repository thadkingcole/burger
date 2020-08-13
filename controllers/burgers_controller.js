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

router.put("/api/burgers/:id", (req, res) => {
  burger.update({ id: req.params.id }, (result) => {
    // if no rows changed, burger id not found
    if (result.changedRows === 0) return res.status(404).end();
    res.status(200).end();
  });
});

// * export this module
module.exports = router;
