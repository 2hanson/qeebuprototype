templates.noticeView = "app/views/NoticeView.html";

window.NoticeView = Backbone.View.extend({

    title: "qeebu notice",
    destructionPolicy:'never',
    backLabel: "Back",

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },
    
    render:function (eventName) {
        this.$el.html(templates.noticeView);
        var self = this;

        return this;
    }

});
