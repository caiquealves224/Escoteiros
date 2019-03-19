var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/",function(req, res) {
  res.render("users",{title: "Usuarios"});
});

/* GET users listing. */
router.get("/:id", function(req, res) {
  res.render("users",{title: req.params.id});
});

module.exports = router;
