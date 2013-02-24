templates.homeView = "app/views/HomeView.html";

window.HomeView = Backbone.View.extend({

    title: "qeebu prototype",
    destructionPolicy:'never',

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },  

    events:{
        "click #agendabtn":"agendabtnClicked",
        "click #survybtn":"survybtnClicked",
        "click #noticebtn":"noticebtnClicked"
    },
    
    render:function (eventName) {
        this.$el.html(templates.homeView);
        var self = this;

        return this;
    },

    agendabtnClicked:function () {

        var view = new AgendaView();
        window.viewNavigator.pushView( view );
    },

   survybtnClicked:function () {

        var view = new AgendaView();
        window.viewNavigator.pushView( view );
    },

   noticebtnClicked:function () {

        var view = new AgendaView();
        window.viewNavigator.pushView( view );
    }

});