var express = require('express');
var router = express.Router();
const desafioController = require('./../controllers/desafios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/desafios',desafioController);

module.exports = router;
