'use strict';

var Bluebird  = require('bluebird');

module.exports = {
  up: function (db, DataTypes, transaction) {
    return Bluebird
      .delay(1000)
      .then(function () {
        return db.sequelize.query('INVALID QUERY', {transaction});
      });
  }
};
