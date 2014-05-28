/**
 * Created by Ronnie on 2014-05-27.
 */

'use strict';

var connectToMongo = function () {

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/Relicuos');

    return mongoose;

  },

  createEventSchema = function (mongoose) {

    return mongoose.Schema({
      category: String,
      date: Date,
      home: String,
      betsOnHome: Number,
      away: String,
      betsOnAway: Number,
      oddsHome: Number,
      oddsAway: Number
    });

  };

module.exports = {

  createSingleEvent: function (req, res) {

    var mongoose = connectToMongo(),

      eventSchema = createEventSchema(mongoose),

      db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback() {
      var Event = mongoose.model('event', eventSchema);

      var newEvent = new Event(req.body);

      newEvent.save(function (err, newEvent) {
        if (err) {
          return console.err(err);
        }
        console.dir(newEvent);
      });
    });
  },

  getSingleEvent: function (req, res) {

    var mongoose = connectToMongo(),

      eventSchema = createEventSchema(mongoose),

      db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback() {
      console.log("db open");
      var Event = mongoose.model('event', eventSchema);

      Event.findOne({'home': req.params.home}, '', function (err, results) {
        if (err) {
          console.err(err);
        }
        res.json(results);
      });
    });
  }

};