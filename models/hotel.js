var db = require('./index');
var Sequelize = require('sequelize');
var Place = require('./place');

var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.INTEGER,
    validate: {
      len: [1, 5]
    }
  },
  amenities: {
    type: Sequelize.STRING
  }
});

Hotel.belongsTo(Place);

module.exports = Hotel;
