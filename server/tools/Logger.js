'use strict'
function Logger() {

}

/**
 * Logs arguments to the console
 */
Logger.prototype.log = function() {
    console.log.apply(null, arguments);
};

Logger.prototype.debug = function() {
    if ((process.env.ENV || 'development') == 'development') {
        console.log.apply(null, arguments);
    }
};

module.exports = new Logger();