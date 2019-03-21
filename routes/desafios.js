var express = require("express");
var router = express.Router();
const desafioController = require("./../controllers/desafios");

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Express" });
});

router.get("/desafios/:id",desafioController.desafiosPorUsuario);
router.get("/desafios",desafioController.index);

module.exports = router;