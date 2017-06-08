const path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'production';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'resoltz-api'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/resoltz-blog-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'resoltz-api'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/resoltz-blog-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'resoltz-api'
    },
    host: 'http://resoltz-blog.azurewebsites.net',
  	user: 'apigene',
  	password: 'Resoltz21',
  	database: 'resoltz-blog',
  	port: process.env.PORT || 3000,
  	ssl: true,
    db: 'resoltz-api-pg.postgres.database.azure.com'
  }
};

module.exports = config[env];
