// Update with your config settings.
var settings = require('./settings.json');

module.exports = {

  development: {
    client: 'postgresql',
    connection: settings.connection
  },

  staging: {
    //To be added later

  },

  production: {
    //To be added later
  }

};
