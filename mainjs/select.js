
$(document).ready(function() {

	$('.family .choice').toggle(function(){
		$('.family .aList').fadeIn('slow');
	},function(){
        $('.family .aList').fadeOut('fast');
	});

	  $('.family .choice').on('focus', function () {        
              $('.family .aList').fadeIn('slow');	
       });
       $('.family .aList li:last a').on('blur', function () {        
              $('.family .aList').fadeOut('fast');
       });
 
});

