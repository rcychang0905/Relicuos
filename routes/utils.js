/**
 * Created by Ronnie on 2014-06-03.
 */

'use strict';

var q = require('q');

module.exports = {

  throwError: function (err) {
    if (err) {
      throw err;
    }
  },

  connectToMongo: function () {
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
  }

};