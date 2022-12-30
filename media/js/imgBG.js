$(document).ready(function() {
  var screenSize, screenHeight;
  var current=false;

  function screen_size(){
      screenSize = $(window).width();
      screenHeight = $(window).height();

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 1000 && current==false){
          $("#imgBG1").show();
          $("#imgBG2").hide();
          current=true;
        }
      if(screenSize <= 1000){
          $("#imgBG1").hide();
          $("#imgBG2").show();
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