


// Pixlbox
// js media queries
// jsmediaqueries.js - navigation and custom js effects

$(document).ready(function(){
// hide jquery effect elements		   
// $('a#mobileNavTrigger, a#toTop, a#close').hide();
//$('a#toTop, a#close').hide();
		
$("header nav a:odd").addClass("odd");
$("header nav a:even").addClass("even");



});	






// mobile navigation functions
// full page nav
function fullPageNav() {
	$('nav#mobileNavigation').fadeTo(500, 1);
	$('nav#mobileNavigation').on('touchmove', function(e) {e.preventDefault();}); // stop scroling on touch when nav active
	$('a#mobileNavTrigger').fadeTo(500, 0).hide();
	return false;
}







// begin enquire.js media queries
enquire

.register("screen and (max-width:900px)", {

    // OPTIONAL
    // If supplied, triggered when a media query matches.
    match : function() {
		$('a#mobileNavTrigger').show();	
		$("nav#mobileNavigation a").not('.cart').css('display','block').hide();

		$('a#mobileNavTrigger').click(function() {
			$(this).hide();

			$("nav#mobileNavigation a").not('.cart')
			.stop( true, true )
			.css({opacity: 0})
			//.show()
			.delay(100).slideDown(300, 'easeOutQuad')
			.animate({ opacity: 1 },{ queue: false, duration: 750 });
			
			$('a#close').show();
			return false;
		});
		
	
		$('a#close').click(function() {
			$("nav#mobileNavigation a").not('.cart').stop( true, true )
			.delay(100).slideUp(300, 'easeOutQuad')
			.animate({ opacity: 0 },{ queue: false, duration: 200});
			$('a#mobileNavTrigger').show();

			$(this).hide();
			//$('a#mobileNavTrigger').show();
			return false;

		});
		
		
		// for in-page write a close function on the nav and close button 
		$('nav#mobileNavigation a, a#toTop').click(function() {
			$('nav#mobileNavigation a').delay(500).hide();
			$('a#close').hide();
			$('a#mobileNavTrigger').show();
			return false;
		});
		

		},      
                                
    // OPTIONAL
    // If supplied, triggered when the media query transitions 
    // *from a matched state to an unmatched state*.
    unmatch : function() {
		$('#mobileNavTrigger, a#toTop, #close').hide();
		//$("header nav a, header nav h4").not('.cart').show().css({opacity: 1, display: 'inline-block' });
		},    
    
    // OPTIONAL
    // If supplied, triggered once, when the handler is registered.
    setup : function() {
		
		},    
                                
    // OPTIONAL, defaults to false
    // If set to true, defers execution of the setup function 
    // until the first time the media query is matched
    deferSetup : false,
                                
    // OPTIONAL
    // If supplied, triggered when handler is unregistered. 
    // Place cleanup code here
    destroy : function() {
		
		}
      
})






.register("screen and (min-width:100px)", {

    // OPTIONAL // If supplied, triggered when a media query matches.
    match : function() {

			function WayPoints() {
				$.waypoints.settings.scrollThrottle = 2;
				$('.showTop').waypoint(function (event, direction) {
						if (direction === 'down'){
							$('a#toTop').stop( true, true ).show().css({opacity: 1, display: 'inline-block' });
							$('nav#primaryNavigation').addClass('fixme');
                            $('div#primaryNavigationHolder').addClass('padme');
						} else {
							$('a#toTop').stop( true, true ).hide();
                            $('nav#primaryNavigation').removeClass('fixme');
                            $('div#primaryNavigationHolder').removeClass('padme');
						}
					})	
				}
			WayPoints();
		},      
                                
    // OPTIONAL // If supplied, triggered when the media query transitions  // *from a matched state to an unmatched state*.
    unmatch : function() {
		$('.showTop').waypoint('destroy');
		
		},    
    
    // OPTIONAL // If supplied, triggered once, when the handler is registered.
    setup : function() {
		},    
                                
    // OPTIONAL, defaults to false // If set to true, defers execution of the setup function  // until the first time the media query is matched
    deferSetup : true,
                                
    // OPTIONAL // If supplied, triggered when handler is unregistered. // Place cleanup code here
    destroy : function() {}
      
})




.register("screen and (min-width:100px)", {

    // OPTIONAL // If supplied, triggered when a media query matches.
    match : function() {

            function WayPoints() {
                $.waypoints.settings.scrollThrottle = 2;
                $('#pos-1').waypoint(function (event, direction) {
                        if (direction === 'down'){
                            $('div#snav').stop( true, true ).show().css({opacity: 0.1, display: 'inline-block' }).fadeTo(750, 1);
                        } else {
                            $('div#snav').stop( true, true ).hide();
                        }
                    })  
                }
            WayPoints();
        },      
                                
    // OPTIONAL // If supplied, triggered when the media query transitions  // *from a matched state to an unmatched state*.
    unmatch : function() {
        $('#pos-1').waypoint('destroy');
        
        },    
    
    // OPTIONAL // If supplied, triggered once, when the handler is registered.
    setup : function() {
        },   
                                
    // OPTIONAL, defaults to false // If set to true, defers execution of the setup function  // until the first time the media query is matched
    deferSetup : true,
                                
    // OPTIONAL // If supplied, triggered when handler is unregistered. // Place cleanup code here
    destroy : function() {}
      
})



;













