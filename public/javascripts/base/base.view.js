define([
    'underscore',
    'backbone',
    'handlebars'
], function (_, Backbone, Handlebars) {
    "use strict";

    var BaseView = Backbone.View.extend({

        renderTemplate: function (data) {
            if (this.template === undefined) {
                return;
            }
            data = data || {};

            var html = Handlebars.compile(this.template)(data);
            this.$el.html(html);

            return html;
        }
    });

    return BaseView;
});