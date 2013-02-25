templates.speakerView = "app/views/SpeakerView.html";

window.SpeakerView = Backbone.View.extend({

    title: "qeebu speaker",
    destructionPolicy:'never',
    backLabel: "Back",

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },  
    
    render:function (eventName) {
        this.$el.html(templates.speakerView);
        var self = this;

        return this;
    }

});