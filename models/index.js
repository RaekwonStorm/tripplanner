var Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost/tripplanner');

module.exports = db;
