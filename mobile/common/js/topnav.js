$(document).ready(function() {
    var op = false; 
      
    $(".menu_ham").click(function(e) {
        e.preventDefault();
        
        var documentHeight =  $(document).height();
        $("#gnb").css('height',documentHeight);
 
       if(op==false){ 
         $("#gnb").animate({right:0,opacity:1}, 'fast');
         $('#headerArea').addClass('mn_open');
         op=true;
         $('.modal_box').fadeIn('slow');
       }else{ 
         $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
         $('#headerArea').removeClass('mn_open');
         op=false;
         $('.modal_box').fadeOut('fast');
       }
 
    });
   
   });