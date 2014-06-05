/**
 * Created by Ronnie on 2014-06-03.
 */

'use strict';

var utils = require("./utils.js");

module.exports = {

  createSingleEvent: function (req, res) {

    utils.connectToMongo().then(function success(mongoclient) {
      operation(mongoclient);
    });

    var operation = function (mongoclient) {
      var db_Relicuos = mongoclient.db('Relicuos');

      db_Relicuos.collection('events').insert(req.body, function (err, result) {
        utils.throwError(err);
        mongoclient.close();
      });
    };
  },

  updateSingleEventBetsCount: function(req, res){

    utils.connectToMongo().then(function success(mongoclient) {
      operation(mongoclient);
    });

    var operation = function(mongoclient){
      var db_Relicuos = mongoclient.db('Relicuos'),
        ObjectID = require('mongodb').ObjectID;

      db_Relicuos.collection('events').update({'_id': new ObjectID(req.body[0].id)}, { $inc: req.body[1]}, function(err, result){
        utils.throwError(err);
        mongoclient.close();
      });
    };
  },

  getSingleEvent: function (req, res) {

    utils.connectToMongo().then(function success(mongoclient) {
      operation(mongoclient);
    });

    var operation = function (mongoclient) {
      var db_Relicuos = mongoclient.db('Relicuos');

      db_Relicuos.collection('events').find({
        'category': req.params.category
      }).toArray(function (err, results) {
        utils.throwError(err);

        res.json(results);
        mongoclient.close();
      });
    };
  }

};