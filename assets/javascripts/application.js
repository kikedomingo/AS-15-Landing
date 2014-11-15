$(document).ready(function() {


    // VIDEO CONTROLS -----
        $(".off .ctrl-mute").click(function (e) {
            e.preventDefault();
            $("video").prop('muted', false); //mute
            $(this).parent().hide();
            $(".on").show();
        });
        $(".on .ctrl-mute").click(function (e) {
            e.preventDefault();
            $("video").prop('muted', true); //mute
            $(this).parent().hide();
            $(".off").show();
        });

        $("#togglefull").click(function () {
            goFullscreen('video_background');
            return false
        });
    // --------------------

    $("#togglenav").click(function () {
        $('#nav').toggleClass('appear');
    });


    var header = $("header");

    
    $(window).scroll(function() { KikeParallax() });
    

    $('a').smoothScroll({speed: 850, offset: -55});


    function KikeParallax() {
        if ($("#togglenav").is(":hidden")) {
            scrollPos = $(this).scrollTop();
            $('#cover .hero').css({
                'opacity': 1-(scrollPos/340)
            });
        };

        
        var scroll = $(window).scrollTop();
            if (scroll >= 480) {
                header.addClass("addbg");
            } else {
                header.removeClass("addbg");
            }

    };
});

/*
// PARALLAX
(function($) {

    $.parallax = function(element, options) {

        var defaults = {
            speed: 10
        }

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element,
             $win = $(window);

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
                                   
            $element.css({
                'background-position-y': -$win.scrollTop() / plugin.settings.speed
            });

            $win.scroll(function() {
                $element.css({
                    'background-position-y': -$win.scrollTop() / plugin.settings.speed
                });
            })
        }

        plugin.init();

    }

    $.fn.parallax = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('parallax')) {
                var plugin = new $.parallax(this, options);
                $(this).data('parallax', plugin);
            }
        });

    }

})(jQuery);
*/
// ACTIVATING PARALLAX
/*
$(function () {
    if ($("#togglenav").is(":hidden")) {
        $("#cover").parallax({speed:10});
    };
});
*/


//fullscreen
function goFullscreen(id) {
  var element = document.getElementById(id);       
  if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }  
}