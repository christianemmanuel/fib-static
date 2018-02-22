$(document).ready(function() {
	var bodyToggle = $('body');

    var img = new Image();
	    img.src = 'images/main_banner.jpg';
	    if (img.src){
	     var int = setInterval(function() {
	      if (img.complete) {
	          clearInterval(int);
	          $('.main-banner').addClass("banner-image")
	      }  
	  }, 100);
	}
    /*****************************
    // Tab menu services inner page
    // ******************************/ 
    $('.tab_menu_login ul li a').click(function(e) {
        $('.tab_menu_login ul li a').removeClass('active');

        $(this).addClass('active');

        var click_tab = $(this).attr('href');

        $('.login_tab_content').not(click_tab).css("display", "none");
        $(click_tab).fadeIn('fast');

        e.preventDefault();
    });

    $('.testimonial-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    dots: true,
	    nav:true,
	    autoHeight:true,
	    mouseDrag: false,
	    items: 1
	});

	$('#compare_our_rates_mobile').owlCarousel({
	    loop:false,
	    margin:10,
	    dots: true,
	    nav:false,
	    autoHeight:true,
	    mouseDrag: false,
	    items: 1
	});

	$('.gallery_img_carousel').owlCarousel({
	    loop:false,
	    margin:20,
	    dots: false,
	    nav:true,
	    autoHeight:true,
	    mouseDrag: false,
	    items: 4
	});

    $('#mobile_loginToAccount').click(function() {
		$('.loginTab-wrapper').fadeToggle();
		bodyToggle.toggleClass('overflow-hidden');
	});
	$('.closeLogin_wrapper').click(function() {
		$(this).parents('.loginTab-wrapper').fadeOut();
		bodyToggle.removeClass('overflow-hidden');
	});
	$('.toggle-nav').click(function() {
		bodyToggle.toggleClass('collapse_menu');
	});

    // DROPDOWN MENU ON MOBILE
    var mobileMenuDropdown = $(window).width();
	if(mobileMenuDropdown<=768) {
		$('.main-nav ul>li.dropdown>a').click(function(e) {
			$('.main-nav ul>li.dropdown ul.dropdown-menu').slideUp().prev().removeClass('active'), 
			$(this).next().is(':visible') || $(this).next().slideDown().prev().addClass('active');
			e.stopPropagation()
		});
	}
	$(window).resize(function(){
		var mobileMenuDropdown = $(window).width();
		if(mobileMenuDropdown>=768) {
			$('body').removeClass('overflow-hidden');
			$('.main-nav ul li.dropdown ul.dropdown-menu').removeAttr('style');
			$('.loginTab-wrapper').removeAttr('style');
		}
	});



	// ACCORDION
	$('.accordion_header .btn_accordion_collapse').click(function(e) {
		$('.accordion_header .accordion_content').slideUp().parent().removeClass('active_accordion'), 
		$(this).next().is(':visible') || $(this).next().slideDown().parent().addClass('active_accordion');
		e.stopPropagation()
	});

	// MEDIA QUERY JS
	// $(window).resize(function(){
	// 	var windowWidth = $(window).width();
	// 	if(windowWidth<=768) { 
	// 		$('#mobile_loginToAccount').after($('.cta-banner'));
	// 	}
	// 	var windowWidth = $(window).width();
	// 	if(windowWidth>=768) { 
	// 		$('.main-banner-intro p').after($('.cta-banner'));
	// 	}
	// });

	// var windowWidth = $(window).width();
	// if(windowWidth<=768) { 
	// 	$('#mobile_loginToAccount').after($('.cta-banner'));
	// }

	// ANIMATE SCROLL MENU
	$('a.go_down').bind('click', function(e) {
		var target = $(this).attr("data-href");
		$('html, body').stop().animate({
			scrollTop: $(target).offset().top - 158
		}, 500);

		e.preventDefault();
	});
	
	// MODAL
	$('.btn_modal_trigger').click(function(e){
        var myelement = $(this).attr('href')
            $(myelement).toggleClass('fast_show');
        $('.show_modal:visible').not(myelement).removeClass('fast_show');
        $('body').addClass('modal_toggle');

        e.preventDefault();
    });

    $('.close-modal').click(function(e){
        $('.show_modal').removeClass('fast_show');
        $('body').removeClass('modal_toggle');

        e.preventDefault();
    });

    $(document).on('keyup',function(evt) {
      if (evt.keyCode == 27) {
        $('.show_modal').removeClass('fast_show');
        $('body').removeClass('overflow-hidden');
        $('body').removeClass('modal_toggle');
      }
    });

});