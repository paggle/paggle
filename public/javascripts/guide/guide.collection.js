define([
  'underscore',
  'backbone',
  'base/base.collection',
  'guide/guide.model'
], function(_, Backbone, BaseCollection, GuideModel){
  "use strict";

  var GuideCollection = BaseCollection.extend({
    url: "/guides",
    model: GuideModel

  });
  return GuideCollection;
});

