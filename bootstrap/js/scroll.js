$(document).ready(function () {

  $(window).on('scroll',function(){
      var scroll = Math.floor($(window).scrollTop());
	  var set = $('.future').offset();

      if(scroll > set.top-400){
          $('.future .horizon').addClass('over')
          $('.future .elon').addClass('run')
          $('.nav .doge').removeClass('hidden')
      }

      if(scroll < set.top-400){
        $('.future .horizon').removeClass('over')
        $('.future .elon').removeClass('run')
        $('.nav .doge').addClass('hidden')
    }
	
  });

  $('.nav .doge').toggle(
    function(e){
      e.preventDefault();
      $('body').addClass('dogemode')
      $('video').attr('src','./image/musk.mp4')
      $('.link_to').attr('href','https://youtu.be/ifkaa7C9sOg')
    },function(e){
      e.preventDefault();
      $('body').removeClass('dogemode')
      $('video').attr('src','./image/spacex.mp4')
      $('.link_to').attr('href','#LANDING')
    }
  )

});