'use strict';

module.exports = {
  up: function (db, Sequelize, transaction) {

    return Promise.all(
      [db.createTable('Person', { name: Sequelize.STRING } )]
    ).then(() => {
      return db.addIndex('Person', {
        name: 'person_name_idx',
        fields: ['name']
      })
    });

  }
};
