define([
  'jquery',
  'underscore',
  'backbone',
  'router'
], function($, _, Backbone, Router){
  "use strict";

  var initialize = function(){
    Router.initialize();
    Backbone.history.start();//{pushState: true, root: "/guides"});
  };

  return {
    initialize: initialize
  };
});