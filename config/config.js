var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'production';

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
    host: 'http://api-resoltz.azurewebsites.net',
  	user: 'apigene',
  	password: 'Resoltz21',
  	database: 'resoltzapi',
  	port: process.env.PORT || 3000,
  	ssl: true,
    db: 'resoltz-api-pg.postgres.database.azure.com'
  }
};

module.exports = config[env];
