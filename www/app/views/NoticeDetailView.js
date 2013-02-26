templates.noticeDetailView = "app/views/NoticeDetailView.html";

window.NoticeDetailView = Backbone.View.extend({

    title: "qeebu noticeDetail",
    destructionPolicy:'never',
    backLabel: "Back",

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },
    
    render:function (eventName) {
        this.$el.html(templates.noticeDetailView);
        var self = this;

        return this;
    }

});
