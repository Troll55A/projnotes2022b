const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',author:'Morales Guzman Luis Andres'});
});

module.exports = router;
