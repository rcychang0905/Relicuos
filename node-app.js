'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var mongoApi = require('./routes/mongoAPI');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.use(express.favicon(__dirname + '/public/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.post('/createSingleEvent', mongoApi.createSingleEvent);
app.get('/getSingleEvent/:home', mongoApi.getSingleEvent);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Relicuos server listening on port ' + app.get('port'));
});