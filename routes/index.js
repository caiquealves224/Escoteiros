const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Inicio" });
});

router.get("/login", function(req, res) {
  res.render("index", { title: "Inicio" });
});

module.exports = router;
