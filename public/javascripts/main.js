require.config({
    enforceDefine: true,
    baseUrl: 'javascripts',
    paths: {
        jquery: 'libs/jquery-1.9.0',
        underscore: 'libs/underscore-1.4.3',
        backbone: 'libs/backbone-0.9.10',
        handlebars: 'libs/handlebars-1.0rc2',
        templates: '../templates'
    },
    shim: {
        "underscore": {
            deps: [],
            exports: "_"
        },
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        "handlebars": {
            deps: [],
            exports: "Handlebars"
        }
    }
});

define(['app'], function (App) {
    App.initialize();
});