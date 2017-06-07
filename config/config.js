var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'production';

var config = {
  // development: {
  //   root: rootPath,
  //   app: {
  //     name: 'resoltz-api'
  //   },
  //   port: process.env.PORT || 3000,
  // },

  test: {
    root: rootPath,
    app: {
      name: 'resoltz-api'
    },
    port: process.env.PORT || 3000,
  },

  production: {
    host: 'resoltz-api-pg.postgres.database.azure.com',
	user: 'apigene@resoltz-api-pg',
	password: 'Resoltz21',
	database: 'resoltzapi',
	port: 5432,
	ssl: true,
  }
};

module.exports = config[env];
