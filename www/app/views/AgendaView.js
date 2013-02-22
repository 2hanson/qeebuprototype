templates.agendaView = "app/views/AgendaView.html";

window.AgendaView = Backbone.View.extend({

    title: "qeebu agenda",
    destructionPolicy:'never',
    backLabel: "Back",

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },  
    
    render:function (eventName) {
        this.$el.html(templates.agendaView);
        var self = this;

        return this;
    }

});