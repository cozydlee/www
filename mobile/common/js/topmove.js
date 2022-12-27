$(document).ready(function() {
  
     $('.topMove').hide();
            
     $(window).on('scroll',function(){
          var scroll = $(window).scrollTop(); 
                  
 
           if(scroll>400){ 
             $('.topMove').fadeIn('slow');
          }else{
             $('.topMove').fadeOut('fast');
          }
     });
 
      
     $('.topMove').click(function(e){
       e.preventDefault();
       $("html,body").stop().animate({"scrollTop":0},1000);
   });
            
       
 });