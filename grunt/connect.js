// The actual grunt server settings
module.exports =  function (grunt) {
  'use strict';

  var modRewrite = require('connect-modrewrite');


  return {
    options: {
      port: grunt.option('port') || 8000,
      livereload: grunt.option('livereload') || 35729,
      // Change this to '0.0.0.0' to access the server from outside
      hostname: grunt.option('hostname') || '0.0.0.0'
    },
    livereload: {
      options: {
        open: true,
        base: [
          '.tmp',
          '<%= config.app %>'
        ],
          //The following URL gave this: https://gist.github.com/nnarhinen/771915756
         middleware: function(connect, options) {
              var middlewares = [];

              middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]'])); //Matches everything that does not contain a '.' (period)
              options.base.forEach(function(base) {
                  middlewares.push(connect.static(base));
              });
              return middlewares;
          }
      }
    },
    dist: {
      options: {
        open: true,
        base: '<%= config.dist %>',
        livereload: false
      }
    }
  };
};
