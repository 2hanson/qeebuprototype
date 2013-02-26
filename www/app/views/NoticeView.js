templates.noticeView = "app/views/NoticeView.html";

window.NoticeView = Backbone.View.extend({

    title: "qeebu notice",
    destructionPolicy:'never',
    backLabel: "Back",

    initialize: function(options) {
        this.render();
        this.view = this.$el;
        this.addNotices(5);
    },

    events:{
        "click ul":"listItemClick"
    },
    
    render:function (eventName) {
        this.$el.html(templates.noticeView);
        var self = this;

        return this;
    },

    addNotices: function(num)
    {
        while (num >= 0)
        {
            this.$el.find( "#noticeList" ).append("<li>"+num+"</li>");
            --num;
        }
        //jQuery("#noticeList").append("<li>hello</li>");
    },

    listItemClick: function( event ) {
        this.$el.find( "li" ).removeClass( "listSelected" );
        var target = $( event.target )
        if (target.get(0).nodeName.toUpperCase() != "LI") {
            target=target.parent();
        }
        
        target.addClass( "listSelected" );


        var view = new NoticeDetailView();
        window.viewNavigator.pushView( view );
    }

});
