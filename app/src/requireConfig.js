require.config({
    baseUrl: 'lib',
    shim: {
        angular: {
            exports: 'angular'
        },
        underscore: {
            exports: '_'
        }
    },
    paths: {
        angular: '../lib/angular/angular',
        underscore: '../lib/underscore/underscore'
    },
    packages: [

    ]
});
require(['../src/main']);