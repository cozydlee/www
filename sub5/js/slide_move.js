    $(document).ready(function () {
            
              $('.topMove').hide();
           
             $(window).on('scroll',function(){
                  var scroll = $(window).scrollTop();
                 
                 
                  $('.text').text(scroll);

                  if(scroll>500){ 
                      $('.topMove').fadeIn('slow');  
                  }else{
                      $('.topMove').fadeOut('fast');
                  }
             });
           
              $('.topMove').click(function(e){
                 e.preventDefault();
                 $("html,body").stop().animate({"scrollTop":0},1000);
              });

              $('.slideMenu a').click(function(e){
                 e.preventDefault();
            
                  var value=0;

                  if($(this).hasClass('link1')){ 
                     value= $('#content .con1').offset().top; 
                  }else if($(this).hasClass('link2')){
                     value= $('#content .con2').offset().top; 
                  }else if($(this).hasClass('link3')){
                     value= $('#content .con3').offset().top; 
                  }else if($(this).hasClass('link4')){
                     value= $('#content .con4').offset().top; 
                  }
                  
                $("html,body").stop().animate({"scrollTop":value},1000);
              });
       });