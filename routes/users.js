var express = require('express');
var router = express.Router();
const controller = require('../controllers/desafios') ;

/* GET users listing. */
router.get('/',function(req, res, next) {
  res.render('users',{title: 'Usuarios'});
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.render('users',{title: req.params.id});
});

module.exports = router;
