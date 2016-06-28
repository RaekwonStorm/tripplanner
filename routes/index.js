var express = require('express');
var router = express.Router();
var Activity = require('../models/activity');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Promise = require('bluebird');


router.get('/', function(req, res, next){
  Promise.all([Activity.findAll(), Hotel.findAll(), Restaurant.findAll()])
  .spread(function (activities, hotels, restaurants) {
    res.render('index', {activities: activities, hotels: hotels, restaurants: restaurants});
  });
});

module.exports = router;
