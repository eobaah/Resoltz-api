const server = require('../config/express');
const express = require('express');
const app = express();
const router = express.Router();
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const {Resoltzapi, db} = require('../app/models/article');

chai.use(chaiHttp);

describe('getAllUsers', () => {
  it('does function exist', () => {
      expect( Resoltzapi.getAllUsers ).to.be.a( 'function' );
    })
});

describe('getAllUsers', () => {
  it.only('should return status code 123',
  Resoltzapi.getAllUsers()
    .then( users => {
      response.send( users );
    })
    .catch(next)
});
  ( done ) => {
    chai.request(server)
      .get('/api/users')
      .end( ( err, response ) => {
        expect(err.status).to.equal(123);
       done();
      })
  });
});

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
