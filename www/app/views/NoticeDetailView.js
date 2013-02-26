templates.noticeDetailView = "app/views/NoticeDetailView.html";

window.NoticeDetailView = Backbone.View.extend({

    title: "qeebu noticeDetail",
    destructionPolicy:'never',
    backLabel: "Back",

    initialize: function(options) {
        this.render();
        this.view = this.$el;
        this.valueString = options.content;
        this.showContent();
    },
    
    render:function (eventName) {
        this.$el.html(templates.noticeDetailView);
        var self = this;

        return this;
    },

    showContent:function (content)
    {
        this.$el.find( "#content" ).append("<p>"+this.valueString+"</p>");
    }

});
