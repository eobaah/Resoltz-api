var express = require('express'),
  router = express.Router(),
  Resoltzapi = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/api', function (req, res, next) {
  var apis = [new Resoltzapi(), new Resoltzapi()];
    res.render('index', {
      title: 'Generator-Express MVC',
      apis: apis
    });
});
