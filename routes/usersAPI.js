/**
 * Created by Ronnie on 2014-06-03.
 */

'use strict';

var utils = require("./utils.js");

module.exports = {

  createUser: function (req, res) {

    utils.connectToMongo().then(function success(mongoclient) {
      operation(mongoclient);
    });

    var operation = function (mongoclient) {
      var db_Relicuos = mongoclient.db('Relicuos');

      db_Relicuos.collection('user').insert(req.body, function (err, result) {
        utils.throwError(err);
        mongoclient.close();
      });
    };
  }

//  updateUser: function(req, res){
//
//    utils.connectToMongo().then(function success(mongoclient) {
//      operation(mongoclient);
//    });
//
//    var operation = function(mongoclient){
//      var db_Relicuos = mongoclient.db('Relicuos'),
//        ObjectID = require('mongodb').ObjectID;
//
//      db_Relicuos.collection('user').update({'_id': new ObjectID(req.body[0].id)}, { $inc: req.body[1]}, function(err, result){
//        utils.throwError(err);
//        mongoclient.close();
//      });
//    };
//  },
//
//  getUser: function (req, res) {
//
//    utils.connectToMongo().then(function success(mongoclient) {
//      operation(mongoclient);
//    });
//
//    var operation = function (mongoclient) {
//      var db_Relicuos = mongoclient.db('Relicuos');
//
//      db_Relicuos.collection('user').find({
//        'category': req.params.category
//      }).toArray(function (err, results) {
//        utils.throwError(err);
//
//        res.json(results);
//        mongoclient.close();
//      });
//    };
//  }

};