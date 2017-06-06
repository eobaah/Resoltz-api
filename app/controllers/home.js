var express = require('express'),
  router = express.Router(),
  Resoltzapi = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/api', function (req, res, next) {
  Resoltzapi.getAllUsers()
    .then( users => {
      response.send( users );
});
