const server = require('../app');

const express = require('express');
const app = express();
const router = express.Router();
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const should = require('chai').should()


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
               expect(res.body).to.be.a('array');
               res.body[0].should.have.property('gender');
               res.body[0].should.have.property('dob');
               res.body[0].should.have.property('currentweight');
               res.body[0].should.have.property('goalweight');
               res.body[0].should.have.property('heightfeet');
               res.body[0].should.have.property('heightinches');
               res.body[0].should.have.property('goal');
               res.body[0].should.have.property('intensity');
               res.body[0].should.have.property('referrer');
               res.body[0].should.have.property('profileimageuri');
               res.body[0].should.have.property('favoriteactivities');
             done();
           } );
  });
});

describe('getAllUsers', () => {
  it('does function exist', () => {
      expect( Resoltzapi.getAllUsers ).to.be.a( 'function' );
    })
});
