define(
    [
        'jquery',
        'underscore',
        'backbone',
        'base/base.view',
        'libs/text!../templates/editguide.html'
    ],
    function ($, _, Backbone, BaseView, template) {
        "use strict";

        var EditGuideView = BaseView.extend({
            template: template,

            events: {
            },

            initialize: function () {
            },

            render: function () {
                this.renderTemplate();
                return this;
            }
        });
        return EditGuideView;
    }
);
