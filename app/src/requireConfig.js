require.config({
    baseUrl: 'lib',
    shim: {
        angular: {
            exports: 'angular'
        },
        lodash: {
            exports: '_'
        },
        'angular-ui-router': [
            'angular'
        ],
        'angular-route': [
            'angular'
        ]
    },
    paths: {
        angular: '../lib/angular/angular',
        lodash: '../lib/lodash/dist/lodash',
        'angular-ui-router': '../lib/angular-ui-router/release/angular-ui-router',
        'angular-route': '../lib/angular-route/angular-route'

    },
    packages: [

    ]
});
require(['../src/main']);