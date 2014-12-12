var express             = require('express'),
    bodyParser          = require('body-parser'),
    atob                = require('atob');



var server = express();


server.use(bodyParser());
server.use(_allowCrossDomain);



//NODE ROUTES---------------------------------------------------------------------------

//----------autocomplete----------
//server.get('/autocomplete/codes/:term/:type', function(req, res, next) {
//    AutoCompleteService.medcodeComplete(req.params.term, req.params.type, res.send.bind(res), next);
//});
//server.get('/autocomplete/general/:term/:type', function(req, res, next) {
//    AutoCompleteService.autocomplete(req.params.term, req.params.type, res.send.bind(res), next);
//});



//serve the angular app
// serve all asset files from necessary directories
var pathToApp = __dirname.substr(0,__dirname.length-6) + 'dist';

server.use("/src", express.static(pathToApp + '/src'));
server.use("/css", express.static(pathToApp + '/css'));
server.use("/styles", express.static(pathToApp + '/css/styles'));
server.use("/content", express.static(pathToApp + '/content'));

// serve index.html for all remaining routes, in order to leave routing up to angular
server.get("/*", function(req, res, next) {
    res.sendFile("index.html", { root: pathToApp});
});


/*-------------LISTEN--------------------------*/
server.listen(7003);



/*------------Helpers----------------*/

function _allowCrossDomain(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    next();
}


//polyfills

if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function(predicate) {
            if (this == null) {
                throw new TypeError('Array.prototype.find called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;

            for (var i = 0; i < length; i++) {
                if (i in list) {
                    value = list[i];
                    if (predicate.call(thisArg, value, i, list)) {
                        return i;
                    }
                }
            }
            return -1;
        }
    });
}