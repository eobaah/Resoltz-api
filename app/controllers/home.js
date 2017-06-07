var express = require('express'),
  router = express.Router(),
  Resoltzapi = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (request, response, next) {
  response.render( 'index', {title: 'title'} );
});

router.get('/api/users', function (request, response, next) {
  Resoltzapi.getAllUsers()
    .then( users => {
      response.send( users );
    })
    .catch(next)
});

router.get('/api/measurements', function (request, response, next) {
  Resoltzapi.getAllUsersMeasurements()
    .then( users => {
      response.send( users );
    })
    .catch(next)
});

router.get('/api/school', function (request, response, next) {
  Resoltzapi.getAllUsersSchool()
    .then( users => {
      response.send( users );
    })
    .catch(next)
});
