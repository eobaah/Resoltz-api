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
  let user = request.body
  Resoltzapi.createUser(user)
    .then( user => response.redirect('/api/users'));
});

router.put('/api/users/edit/:userid', function (request, response, next) {
  let userid = request.params.userid
  let user = request.body
  Resoltzapi.editUser( userid, user )
    .then( user => response.redirect('/api/users'));
});

router.delete('/api/users/delete/:userid', function (request, response, next) {
  let userid = request.params.userid
  Resoltzapi.removeUser( userid )
    .then( user => response.redirect('/api/users'));
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
