$(document).ready(function() {
    var documentHeight =  $(document).height();
    $(".box").css('height',documentHeight);gnb
 	
   $(".menubtn").click(function() {
    $("#gnb").animate({right:0,opacity:1}, 'fast');
    $(".box").show();
   });
   
   $(".box,.close").click(function() {
     $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
     $(".box").hide();
   });
   
   
   var current=0;
   $(window).resize(function(){ 
      var screenSize = $(window).width(); 
      if( screenSize > 769){
        current=1;
        $("#gnb").css({right:0,opacity:1});
		$(".box").hide();
      }
      if(current==1 && screenSize < 769){
         $("#gnb").css({right:'-100%',opacity:0});
		 $(".box").hide();
         current=0;
      }
    }); 
   
  });