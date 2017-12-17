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
            $("#common-header").addClass("float-header");
            $("#common-header").removeClass("fixedHeader");            
        }
        else{
             $("#common-header").removeClass("hideHeader");
             $("#common-header").removeClass("fixedHeader");
             $("#common-header").removeClass("float-header");
        }
        
        if (  windowScrollTop>30  && window.prevScroll && window.prevScroll > windowScrollTop ) {
            $("#common-header").removeClass("hideHeader");
            $("#common-header").addClass("fixedHeader");            
        }
        
        window.prevScroll= $(window).scrollTop();        
    });
    
    
    //Product detail. Basket
    if ( $(".game-detail-wrapp").length && $(".right-product-block").length && $(window).width()>=960 )
    {        
        var containerHeight=$(".game-detail-wrapp > .container").height();
        var blockTop=$(".right-product-block").offset().top;
        $(window).scroll(function(event)
        {            
            if(  $(window).scrollTop() > blockTop )
            {
                $(".right-product-block").addClass("fixed");
            }
            else{
                 $(".right-product-block").removeClass("fixed");
            }
            
        });
    }
    
    
    
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

    
    //Game slider
    $(".game-slider").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        navText:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    });
    
    //Counter product
    $(document).on("click", ".change-count-basket", function(event){
    
        event.preventDefault();
        var countField=$(this).parent().find(".count-product");
        var curValue=parseInt( countField.val() );        
        //minus
        if( $(this).hasClass("minus-product") )
        {
            if ( curValue && curValue > 0 ) {
                var newCount=curValue-1;
                countField.val(newCount);
            }
            else
                countField.val(0);
        }
        //plus
        if( $(this).hasClass("plus-product") )
        {            
            var newCount=curValue+1;
            countField.val(newCount);                        
        }        
    });

    //Scroll to top page
    var windowHeight=$(window).height();
    $(window).scroll(function(event)
    {
        if ( $(window).scrollTop() > windowHeight  )        
            $("#up-page-btn").addClass("in");        
        else
            $("#up-page-btn").removeClass("in");
    });
    
    $("#up-page-btn").click(function(event){
        event.preventDefault();
         $('html, body').animate({
            scrollTop: 0
        }, 500);    
    });
        
});