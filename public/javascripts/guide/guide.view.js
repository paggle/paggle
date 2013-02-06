define([
    'jquery',
    'underscore',
    'backbone',
    'base/base.view',
    'guide/guide.collection',
    'libs/text!../templates/guides.html'
], function ($, _, Backbone, BaseView, GuideCollection, template) {
    "use strict";

    var GuideView = BaseView.extend({
        template: template,

        events: {
        },

        initialize: function () {
            this.collection = new GuideCollection();
        },

        render: function () {
            this.collection.on("reset", function () {
                var data = {guides: this.collection.toJSON()};
                this.renderTemplate(data);
            }, this);

            this.collection.fetch();
            return this;
        }
    });
    return GuideView;
});