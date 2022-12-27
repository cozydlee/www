$(document).ready(function () {

    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();

        $('.text').text(scroll);
        
        if(scroll>=600){ 
            $('#content').find('a').addClass('navOn');
            $('header').hide();
        }else{
            $('#content').find('a').removeClass('navOn');
            $('header').show();
        }
    
    });
        
        $('.slideMenu a').click(function(e){
        e.preventDefault();
   
         var value=0;
 
         if($(this).hasClass('tab1')){ 
            value= $('#content .con1').offset().top -50; 
         }else if($(this).hasClass('tab2')){
            value= $('#content .con2').offset().top -50; 
         }else if($(this).hasClass('tab3')){
            value= $('#content .con3').offset().top -50; 
         }else if($(this).hasClass('tab4')){
            value= $('#content .con4').offset().top -50; 
         }
         
       $("html,body").stop().animate({"scrollTop":value},1000);
     });
        
});