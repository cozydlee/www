$(document).ready(function() {
  var screenSize, screenHeight;
  var current=false;

  function screen_size(){
      screenSize = $(window).width();
      screenHeight = $(window).height();

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 1000 && current==false){
          $("#videoBG").show();
          $("#videoBG").attr('src','./images/Elvis.mp4');
          $("#imgBG").hide();
          current=true;
        }
      if(screenSize <= 1000){
          $("#videoBG").hide();
          $("#videoBG").attr('src','');
          $("#imgBG").show();
          current=false;
      }
  }

  screen_size();
  
 $(window).resize(function(){ 
      screen_size();
  }); 
  
  $('.down').click(function(){
      screenHeight = $(window).height();
      $('html,body').animate({'scrollTop':screenHeight}, 1000);
  });

  $('.topmove').click(function(){
    screenHeight = $(window).height();
    $('html,body').animate({'scrollTop':screenHeight}, 1000);
});
  
  
});