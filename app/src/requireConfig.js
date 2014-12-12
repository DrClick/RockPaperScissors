require.config({
    baseUrl: 'lib',
    shim: {
        angular: {
            exports: 'angular'
        },
        lodash: {
            exports: '_'
        },
        famous: {
            exports: 'famous'
        },
        'angular-route': [
            'angular'
        ],
        'angular-mocks': [
            'angular'
        ],
        'angular-loader': [
            'angular'
        ],
        'angular-bootstrap': [
            'angular'
        ],
        'angular-ui-router': [
            'angular'
        ],
        'angular-ui-utils': [
            'angular'
        ],
        'angular-animate': [
            'angular'
        ],
        'famous-angular': [
            'angular',
            'famous'
        ],
        'angular-scroll': [
            'angular'
        ]
    },
    paths: {
        angular: '../lib/angular/angular',
        lodash: '../lib/lodash/dist/lodash',
        'angular-ui-router': '../lib/angular-ui-router/release/angular-ui-router',

        async: '../lib/async/lib/async',
        almond: '../lib/almond/almond',
        'angular-loader': '../lib/angular-loader/angular-loader',
        'angular-mocks': '../lib/angular-mocks/angular-mocks',
        'angular-bootstrap': '../lib/angular-bootstrap/ui-bootstrap-tpls',
        'famous-polyfills': '../lib/famous-polyfills/index',
        requirejs: '../lib/requirejs/require',
        'famous-angular': '../lib/famous-angular/dist/famous-angular',
        'angular-animate': '../lib/angular-animate/angular-animate',
        'angular-ui-utils': '../lib/angular-ui-utils/ui-utils',
        'angular-scroll': '../lib/angular-scroll/angular-scroll.min',
        famous: '../lib/famous/dist/famous-global',
        d3: '../lib/d3/d3'

    },
    packages: []
});
require(['../src/main']);
