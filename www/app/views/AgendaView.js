templates.agendaView = "app/views/AgendaView.html";

window.AgendaView = Backbone.View.extend({

    title: "qeebu agenda",
    destructionPolicy:'never',
    backLabel: "Back",

    initialize: function(options) {
        this.render();
        this.view = this.$el;
        //this.showAgenda();
        //this.showAgenda();
        this.setupSwipeview();
    },  
    
    render:function (eventName) {
        this.$el.html(templates.agendaView);
        var self = this;

        return this;
    },

    showAgenda:function(eventName) {
        //不能有单引号
        var str = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" name="viewport" content="text/html; charset=utf-8; width=device-width; initial-scale=1.0; minimum-scale=1.0;maximum-scale=1.0;user-scalable=no " / > <title>agendaday1</title> <style type="text/css" > body { margin: 0px ; background-color: #f2f2f2; color: #5b5b5b; } body,td,th { font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 16px; } .clear{ clear: both; } .float{float:left} .title{ font-size: 20px; line-height: 30px; color: #000; font-family: Arial, Helvetica, sans-serif; } .title_1{ font-size: 12px; line-height: 30px; color: #000; font-family: Arial, Helvetica, sans-serif; } .title2{ background-color: #da227f; color: #FFF; } .title3{ font-size: 50px; color: #FFF; font-family: Arial, Helvetica, sans-serif; line-height: 55px; } .title4{ font-size: 20px; line-height: 22px; color: #dfdfdf; font-family: Arial, Helvetica, sans-serif; } .title4_1{ font-size: 14px; line-height: 22px; font-family: Arial, Helvetica, sans-serif; } .title5{ font-family: Ebrima; font-size: 18px; } .title6{ font-family: Ebrima; font-size: 18px; color:#50585d } .border{ background-color: #edeeef; border-right: 1px solid #cfcfcf ; border-bottom: 1px solid #cfcfcf; border-left: 1px solid #cfcfcf; } .b{ background-color: #333; height: 3px; margin-top: 3px; } .necer{ margin:0px; padding:0px; } .necer ul{ margin:0px; padding:0px; list-style-type: none; } .necer li{ border-top: 1px solid #fcfcfb; border-bottom: 1px solid #c8c8c8; padding:5px 0px; } .foot_bg{ background-image: url(http://huiyi.qeebu.cn/meeting/Public/Uploads/Image/101/1361779506_foot_bg.png); background-repeat: repeat-x; height:6px; } .jt{ background-image: url(http://huiyi.qeebu.cn/meeting/Public/Uploads/Image/101/1361944743_jt.png); background-repeat: repeat-y; font-size: 16px; } .j2t{ background-image: url(http://huiyi.qeebu.cn/meeting/Public/Uploads/Image/101/1361944754_jt2.png); background-repeat: repeat-y; font-size: 16px; } .jt_bg{ background-color: #e3e4e4; } .title7{ font-size: 13px; } .m20{ margin:0px 0px 0px 16px; } .m25{ margin:5px 16px; } .tu,.tu2 ,.tu3{ background-image: url(http://huiyi.qeebu.cn/meeting/Public/Uploads/Image/101/1361779464_1.png); background-repeat: no-repeat; background-position: 130px 0px; } .tu2{ background-image: url(http://huiyi.qeebu.cn/meeting/Public/Uploads/Image/101/1361779473_2.png); } .tu3{ background-image: url(http://huiyi.qeebu.cn/meeting/Public/Uploads/Image/101/1361779483_3.png); } .hl{line-height: 18px;} </style> </head> <body > <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin:0px 0px 0px 0px; " id="main1"> <tr> <td width="4%" align="center" valign="middle" bgcolor="#da227f" style="padding:0px 5px;"><img src="http://huiyi.qeebu.cn/meeting/Public/Uploads/Image/101/1362129784_an4.png" width="34" height="50" /></td> <td width="6%" height="55" align="center" valign="middle" bgcolor="#da227f" class=" title3" style="padding:0px 5px;">26</td> <td width="86%" bgcolor="#DA227F" class="tu" > <table width="100%" border="0" cellpadding="0" cellspacing="0"> <tr> <td class="title4">TUESDAY <br /> <span style="color:#f98b9d"></span></td> </tr> <tr> <td class="title4_1"style="color:#f98b9d">MARCH 2013</td> </tr> </table> </td> <td width="4%" align="center" valign="middle" bgcolor="#DA227F" style="padding:0px 5px;" ><img src="http://huiyi.qeebu.cn/meeting/Public/Uploads/Image/101/1362129693_an2.png" width="34" height="50" /></td> </tr> </table> <div class="clear"></div> <div class="b"></div> <div class="border" id="child1" > <div class="necer"> <ul> <li> <div class="float m20" ><strong>14:00 – 17:15</strong></div> <div class="float m20" >EARLY BIRD WORKSHOPS <br /><span style="color:#da227f;">Venue: Kunming Function Hall A+B,</span></div> <div class="clear"></div> </li> <li> <div class="float m20 "><strong>14:00 – 15:30 </strong></div> <div class="float m20">Hotel Design: What is Right and What is Wrong </div> <div class="clear"></div> </li> <li> <div class="float m20 "><strong>15:45 – 17:15 </strong></div> <div class="float m20">New Hotel Brands Show </div> <div class="clear"></div> </li> <li> <div class="float m20" ><strong>17:30 – 18:30</strong></div> <div class="float m20">CHAT! CHAT! CHAT!<br /> <span style="color:#da227f;" >Venue: Meeting 1-3, 2nd Floor</span></div> <div class="clear"></div> </li> <li> <div class="float m20"><strong>18:30 – 20:30</strong></div> <div class="float m20">GALA OPENING RECEPTION － SPONSORED BY IHG <br /><span style="color:#da227f">Venue: Yunnan Ballroom, 3rd Floor</span></div> <div class="clear"></div> </li> </ul> </div> <div class="clear"></div> <div class="foot_bg"></div> </div> <div class="clear"></div> <br /> </body> </html>';
        this.$el.find( "#swipeview" ).append(str);
    },

    setupSwipeview:function(eventName) {
        var carousel,
            el,
            i,
            page,
            slides = [
                '<strong>Syuwipe</strong> to know more &gt;&gt;&gt;<br>Or scroll down for <em>Lorem Ipsum</em>',
                '1. A robot may not injure a human being or, through inaction, allow a human being to come to harm.',
                '2. A robot must obey the orders given to it by human beings, except where such orders would conflict with the First Law.',
                '3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Laws.'
            ];

        //var target = this.$el.find( "#swipeview" );
        var target = this.$el.find( "#swipeview" )[0];

        carousel = new SwipeView( target, {
            numberOfPages: slides.length,
            hastyPageFlip: true
        });
        
        // Load initial data
        for (i=0; i<3; i++) {
            page = i==0 ? slides.length-1 : i-1;
                
            el = document.createElement('span');
            el.innerHTML = slides[page];
            carousel.masterPages[i].appendChild(el)
        }
        
        carousel.onFlip(function () {
            var el,
                upcoming,
                i;
                
            for (i=0; i<3; i++) {
                upcoming = carousel.masterPages[i].dataset.upcomingPageIndex;
        
                if (upcoming != carousel.masterPages[i].dataset.pageIndex) {
                    el = carousel.masterPages[i].querySelector('span');
                    el.innerHTML = slides[upcoming];
                }
            }
       });
    }

});