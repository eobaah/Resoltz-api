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
  it('happy path to get json with all users', function(done) {
    chai.request(server)
    .get('/api/users')
    .end(function (err, res) {
      expect(res.body).to.have.length(9);
      done()
    });
  });
});

describe('GET /api/users', function() {
  it('sad path to get json with an incorrest route for user instead of users', function(done) {
    chai.request(server)
    .get('/api/user')
    .end(function (err, res) {
      expect(err.status).to.equal(404);
      done();
    });
  });
});

describe('GET /api/users', function() {
  it('happy path to get json with of users', function(done) {
    chai.request(server)
    .get('/api/users')
    .end(function (err, res) {
      expect(res.status).to.equal(200);
      done();
    });
  });
});


describe('POST /api/createuser', function() {
  it.only('it adds a new user ', (done) => {
       let user = {
         Gender: "Female",
         Dob: '1996-01-01',
         CurrentWeight: 144,
         GoalWeight: 139,
         HeightFeet: 5,
         HeightInches: 8,
         Goal: "Get slim",
         Intensity: "Beginner",
         Referrer: "Eugene",
         ProfileImageUri: "https://api.adorable.io/avatars/92/abott@adorable.png",
         FavoriteActivities: "Judo"
       }
       chai.request(server)
           .post('/api/users/create')
           .send(user)
           .end( (err, res) => {
               res.body.should.be.a('object');
               res.body.book.should.have.property('Gender');
               res.body.book.should.have.property('Dob');
               res.body.book.should.have.property('CurrentWeight');
               res.body.book.should.have.property('GoalWeight');
               res.body.book.should.have.property('HeightFeet');
               res.body.book.should.have.property('HeightInches');
               res.body.book.should.have.property('Goal');
               res.body.book.should.have.property('Intensity');
               res.body.book.should.have.property('Referrer');
               res.body.book.should.have.property('ProfileImageUri');
               res.body.book.should.have.property('FavoriteActivities');
             done();
           } );
  });
});

describe('getAllUsers', () => {
  it('does function exist', () => {
      expect( Resoltzapi.getAllUsers ).to.be.a( 'function' );
    })
});
