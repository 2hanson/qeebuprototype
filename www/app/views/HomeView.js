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
        "click #speakerbtn":"speakerbtnClicked",
        "click #noticebtn":"noticebtnClicked",
        "click #mapbtn":"mapbtnClicked",
        "click #survybtn":"survybtnClicked",
        "click #contactbtn":"contactbtnClicked"
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

   speakerbtnClicked:function () {
        var view = new SpeakerView();
        window.viewNavigator.pushView( view );
    },

   noticebtnClicked:function () {

        var view = new AgendaView();
        window.viewNavigator.pushView( view );
    },
        
    mapbtnClicked:function () {

        var view = new AgendaView();
        window.viewNavigator.pushView( view );
    },

   survybtnClicked:function () {

        var view = new AgendaView();
        window.viewNavigator.pushView( view );
    },

   contactbtnClicked:function () {

        var view = new AgendaView();
        window.viewNavigator.pushView( view );
    }

});