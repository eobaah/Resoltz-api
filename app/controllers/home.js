var express = require('express'),
  router = express.Router(),
  Resoltzapi = require('../models/article').Resoltzapi;

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (request, response, next) {
  response.render( 'index', {title: 'Welcome to the Resoltz API'} );
});


router.get('/api/users', function (request, response, next) {
  Resoltzapi.getAllUsers()
    .then( users => {
      response.send( users );
    })
    .catch(next)
});

router.post('/api/users/create', function (request, response, next) {
  console.console.log( "I have the way" )
  const users = request.body
  console.console.log( "======> users", request.body )
  Resoltzapi.createUser()
    .then( (users) => {
      response.redirect( '/' );
    })
    .catch(next)
});


// router.get('/api/users', function (request, response, next) {
//   Resoltzapi.getAllUsers()
//     .then( users => {
//       response.send( users );
//     })
//     .catch(next)
// });


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
