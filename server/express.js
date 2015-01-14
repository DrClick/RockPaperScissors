/*jshint node:true*/
'use strict';
var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var aToB = require('atob')
var logger = require('./tools/Logger');


var server = express();
var configuration = require('./config');
var config = configuration[process.env.ENV || 'development'];


server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json({limit: '5mb'}));
server.use(_allowCrossDomain);
server.use(compression({threshold: 512}));


//ROUTES---------------------------------------------------------------------------
////default
//
////-----------issues---------------
//server.post('/issues/create', function(req, res, next) {
//    issuesService.addIssue(req.body, res.send.bind(res), next);
//});
//
////----------autocomplete----------
//server.get('/autocomplete/codes/:term/:type', function(req, res, next) {
//    AutoCompleteService.medcodeComplete(req.params.term, req.params.type, res.send.bind(res), next);
//});
//server.get('/autocomplete/general/:term/:type', function(req, res, next) {
//    AutoCompleteService.autocomplete(req.params.term, req.params.type, res.send.bind(res), next);
//});
//server.get('/autocomplete/medications/:term', function(req, res, next) {
//    AutoCompleteService.medicationsComplete(req.params.term, req.params.type, res.send.bind(res), next);
//});

//
////----------medications-----------------
//server.get('/curation/medications', function(req, res, next) {
//    medicationService.getMedications(res.send.bind(res), next);
//});
//server.get('/curation/medications/query', function(req, res, next) {
//    var query = JSON.parse(req.query.query);
//    var sort = JSON.parse(req.query.sort);
//    medicationService.getMedicationsQuery(query, sort, res.send.bind(res), next);
//});
//server.get('/curation/medications/:name', function(req, res, next) {
//    medicationService.getMedication(req.params.name, res.send.bind(res), next);
//});
//
//server.put('/curation/medications/:name', function(req, res, next) {
//    medicationService.saveMedication(req.body, res.send.bind(res), next);
//});
//
////----------diagnosis----------
//server.get('/curation/:diagnosis', function(req, res, next) {
//    curationService.getSessionDiagnosis(_extractUserId(req), req.params.diagnosis, res.send.bind(res), next);
//});
//
////---------curation----------
////note order matters on these
//server.post('/curation/:diagnosis/create', function(req, res, next) {
//    curationService.create(_extractCurationModificationParams(req), res.send.bind(res), next);
//});
//
//server.put('/curation/:diagnosis/undo', function(req, res, next) {
//    curationService.undo(_extractCurationModificationParams(req), res.send.bind(res), next);
//});
//
//server.put('/curation/:diagnosis/save', function(req, res, next) {
//    curationService.save(_extractCurationModificationParams(req), res.send.bind(res), next);
//});
//
//server.delete('/curation/:diagnosis/revert', function(req, res, next) {
//    curationService.revert(_extractCurationModificationParams(req), res.send.bind(res), next);
//});
//
//server.get('/curation/:diagnosis/history', function(req, res, next) {
//    curationService.history(_extractCurationModificationParams(req), res.send.bind(res), next);
//});
//
////note the put routes above will capture certain groups (undo, save)
//server.put('/curation/:diagnosis/:group', function(req, res, next) {
//    curationService.updateObject(_extractCurationModificationParams(req), res.send.bind(res), next);
//});
//
//
//server.post('/curation/:diagnosis/:group/:id', function(req, res, next) {
//    curationService.addItem(_extractCurationModificationParams(req), res.send.bind(res), next);
//});
//
//server.put('/curation/:diagnosis/:group/:id/delete', function(req, res, next) {
//    curationService.deleteItem(_extractCurationModificationParams(req), res.send.bind(res), next);
//});
//
//server.put('/curation/:diagnosis/:group/:id', function(req, res, next) {
//    curationService.updateItem(_extractCurationModificationParams(req), res.send.bind(res), next);
//});

//serve the angular app
// serve all asset files from necessary directories
var pathToApp = __dirname.substr(0, __dirname.length - 6);
var indexRoot;
if (process.env.ENV == 'production' || process.env.ENV == 'ready') {
    pathToApp += 'dist';
    indexRoot = pathToApp
    server.use('/src', express.static(pathToApp + '/src'));
    server.use('/css', express.static(pathToApp + '/css'));
    server.use('/styles', express.static(pathToApp + '/css/styles'));
    server.use('/content', express.static(pathToApp + '/content'));
    server.use('/vendor', express.static(pathToApp + '/vendor'));
}
else {
    indexRoot = pathToApp + '.tmp';
    pathToApp += 'app';
    server.use('/lib', express.static(pathToApp + '/lib'));
    server.use('/src', express.static(pathToApp + '/src'));
    server.use('/content', express.static(pathToApp + '/content'));
    server.use('/styles', express.static(pathToApp + '/styles'));
    server.use('/vendor', express.static(pathToApp + '/vendor'));
}


// serve index.html for all remaining routes, in order to leave routing up to angular
server.get('/*', function(req, res, next) {
    res.sendFile('index.html', {root: indexRoot});
});

/*-------------LISTEN--------------------------*/
server.listen(config.port);
logger.debug('****** Lumiata Snowflake 2.0 started ********');
logger.debug('listening on port: ' + config.port);


/*------------Helpers----------------*/

function _allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    next();
}

function _extractUserId(req) {
    var authHeader = req.headers.authorization;
    return aToB(authHeader.substring(authHeader.lastIndexOf(' ') + 1, authHeader.lastIndexOf('=')));
}
