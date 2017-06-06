var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'resoltz-api'
    },
    port: process.env.PORT || 1337,
  },

  test: {
    root: rootPath,
    app: {
      name: 'resoltz-api'
    },
    port: process.env.PORT || 1337,
  },

  production: {
    root: rootPath,
    app: {
      name: 'resoltz-api'
    },
    port: process.env.PORT || 1337,
  }
};

module.exports = config[env];
