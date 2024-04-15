// Pixlbox - js media queries for responsive & navigation effects
$(document).ready(function(){

    $.localScroll.defaults.axis = 'y';
    $.localScroll({
        target: 'body',
        queue: false,
        hash: false,
        duration: 700,
        offset:-50,
        easing: 'easeOutQuad'
     });
        		
    $("div.tabContent:odd").addClass("odd");
    $("div.tabContent:even").addClass("even");

    $('#mobileTrigger').click(function(){
        $('#mobileNavigation').stop().show();
        $(this).hide();
        $('#mobileClose').show();
        $('header').on('touchmove', function(e) {e.preventDefault();});
        return false;
    }); 

    $('#mobileClose').click(function(){
        $('#mobileNavigation').stop().fadeOut(500).hide();
        $(this).hide();
        $('#mobileTrigger').show();
        $('header').on('touchmove', function(e) {e.stopPropagation();});
        return false;
    }); 

    $('div.tabContent > article > div').each(function() {
        var numItems = $(this).children('section').length;
        if (numItems>2) {
            $(this).closest('div.tabContent').addClass('goflex');
        } else {
            $(this).closest('div.tabContent').addClass('noflex');
        }
    });

    $('section.menuContent').each(function() {
        var numCats = $(this).children('div.menuCategory').length;
        if (numCats==1) {
            $(this).closest('div.tabContent').addClass('oneCat');
        }
    });


});	

/* begin enquire.js media queries */
enquire
.register("screen and (min-width:800px)", {
    match : function() {
        $('div.tabs a.tab').attr( 'href', '#' );
        $('div.tabs a.tab').click(function(){return false;});
        $('div.tabContent').not('#tab1-Content').hide();

        $('div.tabs a.tab').click(function(){
            var tabID = $(this).attr('id');
            $('div.tabs a.tab').removeClass('activeLink');
            $('div.tabContent').hide();
            $(this).addClass('activeLink');
            $('div#'+tabID+'-Content').fadeTo(500,1.0);
            return false;
        });
    }
 })

 .register("screen and (max-width:800px)", {
    match : function() {
        $('div.tabContent').show();

         $('#headerWpnt').waypoint(function(direction) {
          if (direction === 'down') {
             $('a#toTop').fadeTo(1000,1.0);
          }
        });

         $('#headerWpnt').waypoint(function(direction) {
          if (direction === 'up') {
            $('a#toTop').fadeTo(1000,0).stop().hide();
          }
        });
    }
 })


.register("screen and (max-width:1000px)", {
    match : function() {
        $('#mobileClose, #mobileNavigation').hide();
        $('#mobileTrigger').show();   
    }
 })

.register("screen and (min-width:1000px)", {
    match : function() {
        $('#mobileClose, #mobileNavigation').hide();
    }
 })

 /*
.register("screen and (min-width:1000px)", {
    match : function() {

         $('#headerWpnt').waypoint(function(direction) {
          if (direction === 'down') {
             $('header').addClass('darker');
          }
        }, {
          offset: '15%'
        });

         $('#headerWpnt').waypoint(function(direction) {
          if (direction === 'up') {
            $('header').removeClass('darker');
          }
        }, {
          offset: '15%'
        });
    
    }
 })

 .register("screen and (min-width:100px)", {
    match : function() {

         $('#headerWpnt').waypoint(function(direction) {
          if (direction === 'down') {
             $('body:not(.internal) header nav .logo-small').addClass('opacityLess');
          }
        }, {
          offset: '15%'
        });

         $('#headerWpnt').waypoint(function(direction) {
          if (direction === 'up') {
            $('body:not(.internal) header nav .logo-small').removeClass('opacityLess');
          }
        }, {
          offset: '15%'
        });
       
    
    }     
})
*/

;