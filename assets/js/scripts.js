$(document).ready(function(){
   
    if (  $(window).width()<1200 ) {
        //mobile menu
        $('nav#mobile-menu').mmenu();
    }
    //magnificPopup 
    $(".popup-open").magnificPopup({type:'inline',closeOnBgClick:!1,closeBtnInside:!1,alignTop:!0,mainClass:'mfp-move-from-top',focus:'.search-popup-field',midClick:!0,removalDelay:700});
    
    $(".popup-preview").magnificPopup({type:'image'});
    
    $("[data-magnific=true]").each(function(){
        var options=$(this).data("magnific-options");
        console.log(options)
        $(this).magnificPopup(options);
    });
    	
    //Revolution Slider
    jQuery('.tp-banner').revolution(
						{
							delay:15000,
							/*startwidth:1170,
							startheight:500,*/
							hideThumbs:0,
							fullScreenAlignForce:"on",
                            fullWidth:"on",
							fullScreen:"on",
							fullScreenOffsetContainer: "",
                            soloArrowRightHalign:"right",
                            soloArrowLeftHalign:"right",
                            soloArrowLeftHOffset:140,
                            soloArrowRightHOffset:0,
                            soloArrowRightValign:"bottom",
                            soloArrowLeftValign:"bottom",
                            navigationType:"none"
                            
						});    
  
    if ( $(".reviews-carousel").length )
    {
        $(".reviews-carousel").owlCarousel({
                loop:true,
                margin:10,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,                        
                    },
                    600:{
                        items:1,
                        
                    },
                    1000:{
                        items:3,                        
                        loop:false
                    }
                }
            });
    }
    
    $(window).scroll(function(event)
    {
        var windowScrollTop=$(window).scrollTop();        
        if ( windowScrollTop>30  )
        {
            $("#common-header").addClass("hideHeader");
            $("#common-header").removeClass("fixedHeader");
        }
        else{
             $("#common-header").removeClass("hideHeader");
             $("#common-header").removeClass("fixedHeader"); 
        }
        
        if (  windowScrollTop>30  && window.prevScroll && window.prevScroll > windowScrollTop ) {
            $("#common-header").removeClass("hideHeader");
            $("#common-header").addClass("fixedHeader");            
        }
        
        window.prevScroll= $(window).scrollTop();
    });
    
    
    //Animate
    if ( $("[data-animated]").length )
    {
        $("[data-animated]").viewportChecker({
            classToAdd: 'animated fadeInUp',
            offset:100 
        });    
    }
    
    //Rating
    $('#rating').barrating({
        theme: 'fontawesome-stars'
    });

    

        
});