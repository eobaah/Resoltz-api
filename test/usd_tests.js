const server = require('../app');

const express = require('express');
const app = express();
const router = express.Router();
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
// const request = require('supertest');

const {Resoltzapi, db} = require('../app/models/article');

chai.use(chaiHttp);



describe('GET /api/users', function() {
  it.only('respond with json with all users', function(done) {
    chai.request(server)
    .get('/api/users')
    .end(function (err, res) {
      console.log( "======> response", res.body )
      expect(res).to.have.status(200);
      done()
    });
  });
});

// describe('GET /api/users', function() {
//   it('respond with json with all users', function() {
//     return request(app)
//       .get('/api/users')
//       .set('Accept', 'application/json')
//       .expect(200)
//       console.log("response",response)
//       .then(response => {
//           assert(response.body.email, 'foo@bar.com')
//       })
//   });
// });

describe('getAllUsers', () => {
  it('does function exist', () => {
      expect( Resoltzapi.getAllUsers ).to.be.a( 'function' );
    })
});

// describe('getAllUsers', () => {
//   it.only('should return status code 123',
//   Resoltzapi.getAllUsers()
//     .then( users => {
//       response.send( users );
//     })
//     .catch(next)
// });
//   ( done ) => {
//     chai.request(server)
//       .get('/api/users')
//       .end( ( err, response ) => {
//         expect(err.status).to.equal(123);
//        done();
//       })
//   });
// });

// describe('getThisUserSchool', () => {
//     it('should return user details objects', () => {
//       chai.request(app)
//         .get('/api/:usd_id')
//         expect(res).to.have.status(123);
//         done();
//       })
//   });
//
// describe('putNewUserSchoolDetails' () => {
//   it('should put new user info in database', () => {
//     chai.request(app)
//     .put('/api')
//     .send({ password: '123', confirmPassword: '123' })
//     .then(function (res) {
//        expect(res).to.have.status(200);
//     })
//     .catch(function (err) {
//        throw err;
//     });
//   })
// })
