var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Our app is working properly' });
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});


module.exports = router;
