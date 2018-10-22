var numberthing = document.getElementById('animateMe');
if (numberthing) {        numberthing.innerHTML = '0';}

var numberthing2 = document.getElementById('animate9');
if (numberthing2) {        numberthing2.innerHTML = '0';}

var numberthing3 = document.getElementById('animate48');
if (numberthing3) {        numberthing3.innerHTML = '0';}

var numberthing4 = document.getElementById('four1');
if (numberthing4) {        numberthing4.innerHTML = '0';}

var numberthing5 = document.getElementById('four2');
if (numberthing5) {        numberthing5.innerHTML = '0';}

var numberthing6 = document.getElementById('four3');
if (numberthing6) {        numberthing6.innerHTML = '0';}

var numberthing7 = document.getElementById('four4');
if (numberthing7) {        numberthing7.innerHTML = '0';}

    var hash = location.hash;
    if (hash) {
        jQuery(hash).css({
                "background": "#ffffff" });
        jQuery(hash).css({
                "color": 'rgb(8, 178, 108)'});
        jQuery(hash + ' a').css({
                "color": 'rgb(8, 178, 108)'});
        jQuery(hash).css({
                "padding": '3px 30px' });
    }

jQuery(document).ready(function() {
    
jQuery('.videoCaption .posCon p').css('position', 'relative');
        
// video fill a container -----------------------------
        var min_w = 300; // minimum video width allowed
        var vid_w_orig;  // original video dimensions
        var vid_h_orig;

        vid_w_orig = parseInt(jQuery('video').attr('width'));
        vid_h_orig = parseInt(jQuery('video').attr('height'));
        
        // resize function moved to existing window resize listener, and triggered     
        function resizeToCover() {
                // set the video viewport to the window size
                jQuery('#video-viewport').width(jQuery(window).width());
                jQuery('#video-viewport').height(jQuery(window).height());
                
                // use largest scale factor of horizontal/vertical
                var scale_h = jQuery(window).width() / vid_w_orig;
                var scale_v = jQuery(window).height() / vid_h_orig;
                var scale = scale_h > scale_v ? scale_h : scale_v;
                
                // don't allow scaled width < minimum video width
                if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig; }
                
                // now scale the video
                jQuery('video').width(scale * vid_w_orig);
                jQuery('video').height(scale * vid_h_orig);
                // and center it by scrolling the video viewport
                jQuery('#video-viewport').scrollLeft((jQuery('video').width() - jQuery(window).width()) / 2);
                jQuery('#video-viewport').scrollTop((jQuery('video').height() - jQuery(window).height()) / 2);
        }


 
 
// full page scripts -----------------------------  
        jQuery("#greeningtheweb .text").animate({opacity: 1, marginTop: "0" }, 750);             
        jQuery('#fullpage').fullpage({
                lockAnchors: false,
                scrollingSpeed: 1000,
                scrollOverflow: false,
                anchors:[
                        'greening-the-web',
                        'its-a-thing',
                        'its-a-huge-thing',
                        'together-we-can-do-this',
                        'renewable-resources',
                        'co2-generation',
                        'web-stats',
                        'electricity-demand',
                        'streaming-video',
                        'streaming-videos-impact',
                        'usage-stats',
                        'the-web-needs-to-change',
                        'what-can-i-do',
                        'business-owners-designers-and-developers',
                        'sustainability-executives-app-developers-and-engineers',
                        'wind',
                        'turbines',
                        'sun',
                        'solar',
                        'water',
                        'hydro',
                        'earth',
                        'geothermal',
                        'where-to-start',
                        'five-things-you-can-do',
                        'find-a-green-host',
                        'try-ecograder',
                        'create-standards',
                        'measure-usage',
                        'get-in-touch',
                        'cant-do-it-alone',
                        'who-we-are',
                        'contact-us',
                        'great-resources',
                        'data-usage',
                        'data-comparison',
                        'thank-you'
                ], 
        
afterLoad: function(anchorLink, index) {
var loadedSection = jQuery(this);

if(index == 1){
        progstate0();

} else if(index == 2){
        progstate0();

} else if(index == 3){
        progstate0();

} else if(index == 4){ 
        progstate0();

} else if(index == 5){
        progstate0();

} else if(index == 6){
        progstate0();
         
} else if(index == 7){
        progstate1();
        jQuery('#fsh').text('Introduction');
        jQuery("#animate9").animateNumbers(9,true,1000);
        setTimeout(function(){ 
                jQuery("#animate48").animateNumbers(48,true,2000);
        }, 1000);
        
} else if(index == 8 ){
        progstate1();
        jQuery('#fsh').text('Introduction');
        unlocked = 1;
        jQuery("#edemand .introText").animate({opacity: 1, top: "25vh" }, 750);
        setTimeout(function(){  playc1();
        }, 750);
        setTimeout(function(){ playstat1();
        }, 1500);
        setTimeout(function(){ playc2();
        }, 1500);
        setTimeout(function(){ playstat2();
        }, 2250);
        setTimeout(function(){ playc3();
        }, 2250);
        setTimeout(function(){ playstat3();
        }, 3500);
        setTimeout(function(){ jQuery("#edemand .outroText").animate({opacity: 1, top: '75vh' }, 750);
        }, 4000);
        
} else if(index == 9){
        progstate1();
        jQuery('#fsh').text('Introduction');
} else if(index == 10){
        progstate1();        
        jQuery('#fsh').text('Introduction');
} else if(index == 11){
        progstate1();
        jQuery('#fsh').text('Introduction');
        
        setTimeout(function(){
                jQuery("#fourstats .stat1").animate({opacity: 1, marginTop: "0" }, 750);
                jQuery("#four1").animateNumbers(35,true,1000);
        }, 0);
        setTimeout(function(){
                jQuery("#fourstats .stat2").animate({opacity: 1, marginTop: "0" }, 750);
                jQuery("#four2").animateNumbers(100000000,true,1000);

        }, 750);
        setTimeout(function(){
                jQuery("#fourstats .stat3").animate({opacity: 1, marginTop: "0" }, 750);
                jQuery("#four3").animateNumbers(17,true,1000);
        }, 1500);
        setTimeout(function(){
                jQuery("#fourstats .stat4").animate({opacity: 1, marginTop: "0" }, 750);
                jQuery("#four4").animateNumbers(92,true,1000);
        }, 2250);                       

} else if(index == 12){
        progstate2();
        jQuery('#fsh').text('Why does the web need to change?');

} else if(index == 13){
        progstate2();
        jQuery('#fsh').text('Why does the web need to change?');

} else if(index == 14){
        progstate2();
        jQuery('#fsh').text('What can you do?');

} else if(index == 15){
        progstate2();
        jQuery('#fsh').text('What can you do?');

} else if(index == 16){
        progstate3();
        jQuery('#fsh').text('Renewables');

} else if(index == 17){
        progstate3();
        jQuery('#fsh').text('Renewables');

} else if(index == 18){
        progstate3();
        jQuery('#fsh').text('Renewables');

} else if(index == 19){
        progstate3();
        jQuery('#fsh').text('Renewables');

} else if(index == 20){
        progstate3();
        jQuery('#fsh').text('Renewables');

} else if(index == 21){
         progstate3();
        jQuery('#fsh').text('Renewables');
       
} else if(index == 22){
        progstate3();
        jQuery('#fsh').text('Renewables');

} else if(index == 23){
         progstate3();
        jQuery('#fsh').text('Renewables');
       
} else if(index == 24){
        progstate4();
        jQuery('#fsh').text('Our Responsibility');

} else if(index == 25){
        progstate4();
         jQuery('#fsh').text('Our Responsibility');
       
} else if(index == 26){
        progstate4();
        jQuery('#fsh').text('Our Responsibility');

} else if(index == 27){
        progstate4();
         jQuery('#fsh').text('Our Responsibility');
     
} else if(index == 28){
        progstate4();
         jQuery('#fsh').text('Our Responsibility');
      
} else if(index == 29){
        progstate4();
         jQuery('#fsh').text('Our Responsibility');
       
} else if(index == 30){
        progstate4();
        jQuery('#fsh').text('Our Responsibility');

} else if(index == 31){
        progstate5();
        jQuery('#fsh').text('Our Hope');
                
} else if(index == 32){
        progstate5();
        jQuery('#fsh').text('Our Hope');
        
} else if(index == 33){
        progstate5();
        jQuery('#fsh').text('Our Hope');

        
} else if(index == 34){
         progstate5();     
        jQuery('#fsh').text('Our Hope');
         setTimeout(function(){ jQuery("#resources .text h3").animate({opacity: 1 }, 750);
        }, 0);
        setTimeout(function(){ jQuery("#resources .text p").animate({opacity: 1 }, 750);
        }, 750);
        setTimeout(function(){ jQuery("#resources #greenpeace").animate({opacity: 1 }, 750);
        }, 1350);
        //setTimeout(function(){ jQuery("#resources #greenhouse").animate({opacity: 1 }, 750);
        //}, 1750);
        setTimeout(function(){ jQuery("#resources #ecograder").animate({opacity: 1 }, 750);
        }, 1750);
        setTimeout(function(){ jQuery("#resources #greenweb").animate({opacity: 1 }, 750);
        }, 2150);
        
} else if(index == 35){
        progstate5();
        jQuery('#fsh').text('Our Hope');
        jQuery("#animateMe").animateNumbers(1433097,true,2000);

} else if(index == 36){
        progstate5();
        jQuery('#fsh').text('Our Hope');
        
} else if(index == 37){
        progstate5();
        jQuery('#fsh').text('Our Hope');

} // no more else statements
}
});
        
var menustate = 'closed';

function showmenu() {
        menustate = 'open';
        jQuery('#menuToggle').toggleClass('open');
        jQuery('#navigation').css("display" , "block");
        jQuery('#navigation').animate({opacity: 0.95 }, 750);
}
function hidemenu() {
        menustate = 'closed';
        jQuery('#menuToggle').toggleClass('open');
        
        jQuery('#navigation').animate({opacity: 0 }, 750);
        setTimeout(function(){ jQuery('#navigation').css("display" , "none");
        }, 750);
}

jQuery( ".menulink" ).click(function() {    
        hidemenu();
        location.hash = "#" + hash;
});

jQuery( "#menuToggle" ).click(function() {
        if (menustate == 'closed') {
              showmenu();  
        } else {
                hidemenu();
        }
});

//* // make dots green once in, or past that section  -----------------------------

        function progstate0() {
                //jQuery("#progIntro .dot").removeClass('activated');
                //jQuery("#progChange .dot").removeClass('activated');
                //jQuery("#progRenew .dot").removeClass('activated');
                //jQuery("#progRespo .dot").removeClass('activated');
                //jQuery("#progHope .dot").removeClass('activated');
                }
        function progstate1() {
                jQuery("#progIntro .dot").addClass('activated');
                //jQuery("#progChange .dot").removeClass('activated');
                //jQuery("#progRenew .dot").removeClass('activated');
                //jQuery("#progRespo .dot").removeClass('activated');
                //jQuery("#progHope .dot").removeClass('activated');
                }
        function progstate2() {
                jQuery("#progIntro .dot").addClass('activated');
                jQuery("#progChange .dot").addClass('activated');
                //jQuery("#progRenew .dot").removeClass('activated');
                //jQuery("#progRespo .dot").removeClass('activated');
                //jQuery("#progHope .dot").removeClass('activated');
        
                }
        function progstate3() {
                jQuery("#progIntro .dot").addClass('activated');
                jQuery("#progChange .dot").addClass('activated');
                jQuery("#progRenew .dot").addClass('activated');
                //jQuery("#progRespo .dot").removeClass('activated');
                //jQuery("#progHope .dot").removeClass('activated');
                }
        function progstate4() {
                jQuery("#progIntro .dot").addClass('activated');
                jQuery("#progChange .dot").addClass('activated');
                jQuery("#progRenew .dot").addClass('activated');
                jQuery("#progRespo .dot").addClass('activated');
                //jQuery("#progHope .dot").removeClass('activated');
                }
        function progstate5() {
                jQuery("#progIntro .dot").addClass('activated');
                jQuery("#progChange .dot").addClass('activated');
                jQuery("#progRenew .dot").addClass('activated');
                jQuery("#progRespo .dot").addClass('activated');
                jQuery("#progHope .dot").addClass('activated');
                }
        
// circle graphs -----------------------------

        var $window = jQuery('.demand .stats');    // load window into variable
        //var still;      // keeps track of when user done resizing
        
        var unlocked = 0; // unlocks once layer is scrolled to 
        var w = 0;      // container width
        var h = 0;      //container height
        
        var c1d = 0;    //circle 1 diameter
        var c1ts = 0;   //circle 1 top pos. (start)
        var c1te = 0;   //circle 1 top pos. (end)
        var c1ls = 0;   //circle 1 left pos. (start)
        var c1le = 0;   //circle 1 left pos. (end)
        
        var c2d = 0;    //circle 2 diameter
        var c2ts = 0;   //circle 2 top pos. (start)
        var c2te = 0;   //circle 2 top pos. (end)
        var c2ls = 0;   //circle 2 left pos. (start)
        var c2le = 0;   //circle 2 left pos. (end)
        
        var c3d = 0;    //circle 3 diameter
        var c3ts = 0;   //circle 3 top pos. (start)
        var c3te = 0;   //circle 3 top pos. (end)
        var c3ls = 0;   //circle 3 left pos. (start)
        var c3le = 0;   //circle 3 left pos. (end)
        
        var stat1t = 0;
        var stat1l = 0;
        var stat2t = 0;
        var stat2l = 0;
        var stat3t = 0;
        var stat3l = 0;
        
        
        
        function updateWidth() {
            w = $window.width();
            h = $window.height();
            dis = 0.55;
            c1d = w * 0.188;
            c1ts = h * dis;
            c1ls = w * 0.094;                
            c1te = (h * dis)-(c1d/2)-1;
            c1le = c1ls-(c1d/2)-1;
            
            c2d = w * 0.189;
            c2ts = h * dis;
            c2ls = w * 0.3435;
            c2te = (h * dis)-(c2d/2)-1;
            c2le = c2ls-(c2d/2)-1;
            
            c3d = w * 0.501;
            c3ts = h * dis;
            c3ls = w * 0.7495;
            c3te = (h * dis)-(c3d/2)-1;
            c3le = c3ls-(c3d/2)-1;
            
            stat1w = c1d; 
            stat1t = c1ts -30;
            stat1l = c1ls - (c1d/2);    
            
            stat2w = c2d; 
            stat2t = c2ts -30;
            stat2l = c2ls - (c2d/2);
            
            stat3w = c3d; 
            stat3t = c3ts -30;
            stat3l = c3ls - (c3d/2);
            
            jQuery('.demand .stat1').css({
                top: stat1t,
                left: stat1l,
                width: stat1w });
            jQuery('.demand .stat2').css({
                top: stat2t,
                left: stat2l,
                width: stat2w });
        
            jQuery('.demand .stat3').css({
                top: stat3t,
                left: stat3l,
                width: stat3w });
           
            jQuery('.c1').css({
                width: 0,
                height: 0,
                top: c1ts,
                left: c1ls,
                opacity: 0 });
           
            jQuery('.c2').css({
                width: 0,
                height: 0,
                top: c2ts,
                left: c2ls,
                opacity: 0 });
           
            jQuery('.c3').css({
                width: 0,
                height: 0,
                top: c3ts,
                left: c3ls,
                opacity: 0 });
        
        // only allow fade in if scrolled to layer -----------------------------
        if (unlocked !== 0) { 
                playc1();
                playc2();
                playc3();
                playstat1();
                playstat2();
                playstat3();
                
        }
                
        } // end updateWidth -----------------------------
        
        function playstat1() {
          jQuery('.demand .stat1').animate( { opacity: 1 } , 0);
        }
        function playstat2() {
          jQuery('.demand .stat2').animate( { opacity: 1 } , 0);
        }
        function playstat3() {
          jQuery('.demand .stat3').animate( { opacity: 1 } , 0);
        }
        function playc1() {
          jQuery('.c1').animate(
              {   width: c1d,
                  height: c1d,
                  top: c1te,
                  left: c1le,
                  opacity: 1
              } , 0);
        }
        
        function playc2() {
          jQuery('.c2').animate(
              {   width: c2d,
                  height: c2d,
                  top: c2te,
                  left: c2le,
                  opacity: 1
              } , 0);
        }
        
        function playc3() {
          jQuery('.c3').animate(
              {   width: c3d,
                  height: c3d,
                  top: c3te,
                  left: c3le,
                  opacity: 1
              } , 0);
        }

// Window resize function, Bind event listener -----------------------------
        jQuery(window).resize(function() {
            //clearTimeout(still);
            //still = setTimeout(updateWidth, 500); // delay resize animation for circle graph
            updateWidth();
            resizeToCover();
        });
        jQuery(window).trigger('resize');

// tweet popup -----------------------------
        jQuery('.tweet-this').on("click", function(event) {
                event.preventDefault();
                         
                var popuprefwidth =  jQuery(window).width();
                var popuprefheight = jQuery(window).height();
                
                var popuprefleft = (popuprefwidth / 2)-250;
                var popupreftop =  (popuprefheight / 2)-200;
                
                var tweetURL = 'https://twitter.com/intent/tweet?text=The%20internet%20will%20soon%20be%20responsible%20for%201%20billion%20tonnes%20of%20CO2%20or%2010%25%20of%20global%20electricity%20usage.%20https%3A%2F%2Fserving.green%20%23ServingGreen';
                
                window.open(tweetURL, 'Twitter : Social Share', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=500,height=400,top=' + popupreftop + ', left=' + popuprefleft).focus();
        });
   
   

       
}); // end of dom load waiter






/* Animate Numbers  */

(function($) {
    $.fn.animateNumbers = function(stop, commas, duration, ease) {
        return this.each(function() {
            var $this = $(this);
            var start = parseInt($this.text().replace(/,/g, ""));
			commas = (commas === undefined) ? true : commas;
            $({value: start}).animate({value: stop}, {
            	duration: duration === undefined ? 1000 : duration,
            	easing: ease === undefined ? "swing" : ease,
            	step: function() {
            		$this.text(Math.floor(this.value));
					if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
            	},
            	complete: function() {
            	   if (parseInt($this.text()) !== stop) {
            	       $this.text(stop);
					   if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
            	   }
            	}
            });
        });
    };
})(jQuery);



