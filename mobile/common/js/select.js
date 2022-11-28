
$(document).ready(function() {
   /*	
	$('.select .arrow').click(function(){
		$('.select .aList').fadeIn('slow');			  
	});

	$('.select .aList').mouseleave(function(){
		$(this).fadeOut('fast');			  
	});
  */
	$('.family .choice').toggle(function(){
		$('.family .aList').fadeIn('slow');
	},function(){
        $('.family .aList').fadeOut('fast');
	});

	//tab키 처리
	  $('.family .choice').on('focus', function () {        
              $('.family .aList').fadeIn('slow');	
       });
       $('.family .aList li:last a').on('blur', function () {        
              $('.family .aList').fadeOut('fast');
       });
 
});

