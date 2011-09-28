(function($) {
        $.hubtoolbar = function(options) {
            var defaults = {
                subscribeID: '',
                portal: '',
                follow: false,
                followblog: false,
                cta: false,
                ctaguid: '',
                style: {
                    width: '95%',
                    height: '70px',
                    minWidth: '960px'
                }
            };
            var opts = $.extend(defaults, options);
            if (opts.subscribeID) {
                var subscribe = '#IngeniMailSubscribeContainer_' + opts.subscribeID;
                footer();
            }
    
            function footer() {
                $(subscribe).addClass('footer-subscribe');
                $(subscribe).closest('.pad').addClass('footerSlideText footerSlidesubscribe').closest('.block').addClass('footerSlideContent hidden').attr('style', 'display:none;').wrap('<div id="footerSlideContainer"><div class="footerSlide"></div></div>').before('<div id="footerSlideButton"></div>');
                $('.footerSlideText').after('<div class="footerSlidefollow pad footerSlideText"><div class="hs_followme"></div><span class="script"></span></div><div class="footerSlideCTA pad footerSlideText"><span class="hs-cta-wrapper" id=""><span class="hs-cta-node" id=""><span class="script"></span></span></span></div>');
                $('.footer-subscribe *').removeAttr('style');
                $('.footer-subscribe span.subhead').remove();
                $('.footer-subscribe *').removeAttr('style');
                if (opts.portal && opts.follow) {
                    $('.hs_followme').before('<h3 class="follow-text">Follow</h3>');
                    $('.footerSlidefollow .script').html(unescape("%3Cscript type='text/javascript'%3Evar __hs_fm = {portal: " + opts.portal + ", host: 'hubapi.com', blog: " + opts.followblog + "};(function(){var fm = document.createElement('script');fm.type = 'text/javascript'; fm.async = true;fm.src = '//static.hubspot.com/js/fm.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(fm, s);})();%3C/script%3E"));
                }
                if (opts.cta && opts.ctaguid) {
                    $('.footerSlideCTA .hs-cta-wrapper').addClass('hs-cta-wrapper-' + opts.ctaguid);
                    $('.footerSlideCTA .hs-cta-node').addClass('hs-cta-' + opts.ctaguid).attr('id', 'hs-cta-' + opts.ctaguid);
                    $('.footerSlideCTA .hs-cta-wrapper .script').html(unescape("%3Cscript type='text/javascript'%3E(function(){var hsjs = document.createElement('script');hsjs.type = 'text/javascript';hsjs.async = true;hsjs.src ='//cta-service.cms.hubspot.com/cta-service/loader.js?placement_guid=" + opts.ctaguid + "';(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(hsjs);setTimeout(function() {document.getElementById('hs-cta-" + opts.ctaguid + "').style.visibility='hidden'}, 1);setTimeout(function() {document.getElementById('hs-cta-" + opts.ctaguid + "').style.visibility='visible'}, 2000);})();%3C/script%3E"));
                }
                $('#footerSlideContainer .footerSlide').css({
                    'width': opts.style.width,
                    'min-width': opts.style.minWidth
                });
        $('#footerSlideContainer .footerSlideContent').css('height', opts.style.height);
                $("#footerSlideButton").show();
                setTimeout(slide, 1600);
                $("#footerSlideButton").click(slide);
    
                function slide() {
                    if ($(".footerSlideContent").hasClass("hidden")) {
                        $(".footerSlideContent").show("fast", "swing").removeClass("hidden").addClass("open");
                        $('#footerSlideButton').css("backgroundPosition", "bottom left").html('[close]');
                    }
                    else {
                        $(".footerSlideContent").hide("fast", "swing").removeClass("open").addClass("hidden");
                        $('#footerSlideButton').css("backgroundPosition", "top left").html('[open]');
                    }
                }
            }
        };
    })(jQuery);