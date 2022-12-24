$(document).ready(function () {

  $(window).on('scroll',function(){
    var scroll = Math.floor($(window).scrollTop());
	  var set = $('.future').offset();

      if(scroll > set.top-400){
          $('.future .horizon').addClass('over')
      }

      if(scroll < set.top-400){
        $('.future .horizon').removeClass('over')
    }
	
  });

});