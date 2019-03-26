const express = require("express");
const router = express.Router();
const desafioController = require("./../controllers/desafios");

router.get("/",desafioController.index);
router.get("/:id",desafioController.desafiosPorUsuario);

module.exports = router;