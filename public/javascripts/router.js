// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'guide/guide.view',
    'guide/editguide.view'
], function ($, _, Backbone, GuideView, EditGuideView) {
    "use strict";

    var AppRouter = Backbone.Router.extend({
        routes: {
            "guides/new": "editguide",
            "guides/:guide": "showguide",
            "guides": "guides",
            "": "root",
            "*actions": "notFound"
        },

        initialize: function () {
        },

        root: function () {
            $("#main").html("<h2>Home</h2>");
            console.log("router: /");
        },

        showguide: function (river) {
            $("#main").html("<h2>" + river + "</h2>");
            console.log("router: /guides/" + river);
        },

        editguide: function () {
            var view = new EditGuideView({el: $("#main")});
            view.render();
            console.log("router: /guides/new");
        },

        guides: function () {
            var view = new GuideView({el: $("#main")});
            view.render();
            console.log("router: /guides");
        },

        notFound: function () {
            console.log("router: not found");
        }
    });

    var initialize = function () {
        new AppRouter();
    };

    return {
        initialize: initialize
    };
});
