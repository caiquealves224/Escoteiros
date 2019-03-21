var express = require("express");
var router = express.Router();
const desafioController = require("./../controllers/desafios");

router.get("/desafios",desafioController.index);
router.get("/desafios/:id",desafioController.desafiosPorUsuario);

module.exports = router;