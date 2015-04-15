var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dataset', function(req, res, next) {
  res.render('index', { title: 'Examen Final' });
});

module.exports = router;
