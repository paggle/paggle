// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'guide/guide.view'
], function($, _, Backbone, GuideView){
  "use strict";

  var AppRouter = Backbone.Router.extend({
    routes: {
      "guides/:guide": "guide",
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

    guide: function (river) {
      $("#main").html("<h2>" + river + "</h2>");
      console.log("router: /guides/" + river);
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

  var initialize = function(){
    new AppRouter();
  };

  return {
    initialize: initialize
  };
});