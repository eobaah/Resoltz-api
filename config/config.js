var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    // env = 'production';
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'resoltz-api'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/resoltz-api-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'resoltz-api'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/resoltz-api-test'
  },

  production: {
    host: 'resoltz-api-pg.postgres.database.azure.com',
  	user: 'apigene@resoltz-api-pg',
  	password: 'Resoltz21',
  	database: 'resoltzapi',
  	port: process.env.PORT || 3000,
  	ssl: true,
    db: 'postgres://localhost/resoltz-api-production'
  }
};

module.exports = config[env];
