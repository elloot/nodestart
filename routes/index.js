var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    test: 'BRA SIDA',
    lorem: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum laboriosam sunt deleniti, repellendus maiores facilis eius dignissimos excepturi obcaecati nam, impedit voluptatem quod ratione voluptas unde ducimus rem mollitia eos.'
  });
});

router.get('/boot', (req, res, next) => {
  res.render('bootstrap');
});

router.get('/teletekniker', (req, res, next) => {
  res.render('teletekniker');
});

module.exports = router;
