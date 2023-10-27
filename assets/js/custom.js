jQuery(function(){
	jQuery('#menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});
});

jQuery(".menu_bar").click(function() { 
	jQuery('.mobile_menu').addClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideDown('slow'); 
});

jQuery(".menu_close").click(function() { 
	jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideUp('slow'); 
});

jQuery(window).load(function(){
	jQuery('.banner_area .flexslider').flexslider({
		animation: "fade",
		controlNav: false,              
		directionNav: true,
		animationLoop: false,
		slideshow: true,
		prevText: "",
   	 	nextText: "", 
		start: function(slider){
		jQuery('body').removeClass('loading'); 
		}
	});
});

jQuery(window).load(function(){
	jQuery('.testimonial_area .flexslider').flexslider({
		animation: "fade",
		controlNav: false,              
		directionNav: true,
		animationLoop: false,
		slideshow: true,
		prevText: "",
   	 	nextText: "", 
		start: function(slider){
		jQuery('body').removeClass('loading'); 
		}
	});
});

jQuery(window).load(function(){
	jQuery('.gallery_slider_area .flexslider').flexslider({
		animation: "fade",
		controlNav: false,              
		directionNav: true,
		animationLoop: false,
		slideshow: true,
		prevText: "",
   	 	nextText: "", 
		start: function(slider){
		jQuery('body').removeClass('loading'); 
		}
	});
});