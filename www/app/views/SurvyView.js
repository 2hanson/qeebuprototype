templates.survyView = "app/views/SurvyView.html";

window.SurvyView = Backbone.View.extend({

    title: "qeebu survy",
    destructionPolicy:'never',
    backLabel: "Back",

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },
    
    render:function (eventName) {
        this.$el.html(templates.survyView);
        var self = this;

        return this;
    }

});
