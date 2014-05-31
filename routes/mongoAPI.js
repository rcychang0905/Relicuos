/**
 * Created by Ronnie on 2014-05-27.
 */

'use strict';

var q = require('q'),

  throwError = function (err) {
    if (err) {
      throw err;
    }
  },

  connectToMongo = function () {
    var MongoClient = require('mongodb').MongoClient,
      Server = require('mongodb').Server,
      deferred = q.defer(),
      mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});

    mongoclient.open(function (err, mongoclient) {
      if (err) {
        throw err;
      }
      deferred.resolve(mongoclient);
    });

    return deferred.promise;
  };

module.exports = {

  createSingleEvent: function (req, res) {

    connectToMongo().then(function success(mongoclient) {
      operation(mongoclient);
    });

    var operation = function (mongoclient) {
      var db_Relicuos = mongoclient.db('Relicuos');

      db_Relicuos.collection('events').insert(req.body, function (err, result) {
        throwError(err);
        mongoclient.close();
      });
    };
  },

  getSingleEvent: function (req, res) {

    connectToMongo().then(function success(mongoclient) {
      operation(mongoclient);
    });

    var operation = function (mongoclient) {
      var db_Relicuos = mongoclient.db('Relicuos');

      db_Relicuos.collection('events').find({
        'category': req.params.category
      }).toArray(function (err, results) {
        throwError(err);

        res.json(results);
        mongoclient.close();
      });
    };
  }

};