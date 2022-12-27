$(document).ready(function () {

    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        
        if(scroll>=600){ 
            $('#content .slideMenu').find('a').addClass('navOn');
            $('header').hide();
        }else{
            $('#content .slideMenu').find('a').removeClass('navOn');
            $('header').show();
        }

        if(scroll > $('#content .con1').offset().top -160 && scroll < $('#content .con2').offset().top -160 ){
         $('#content .slideMenu').find('a.tab1').css('background','#fff').css('color','#edad14');
         $('#content .slideMenu').find('a.tab2').css('background','#edad14').css('color','#fff');
         }else if(scroll > $('#content .con1').offset().top -160 && scroll < $('#content .con3').offset().top -160 ){
         $('#content .slideMenu').find('a.tab2').css('background','#fff').css('color','#edad14');
         $('#content .slideMenu').find('a.tab1').css('background','#edad14').css('color','#fff');
         $('#content .slideMenu').find('a.tab3').css('background','#edad14').css('color','#fff');
         }else if(scroll > $('#content .con1').offset().top -160 && scroll < $('#content .con4').offset().top -160 ){
         $('#content .slideMenu').find('a.tab3').css('background','#fff').css('color','#edad14');
         $('#content .slideMenu').find('a.tab1').css('background','#edad14').css('color','#fff');
         $('#content .slideMenu').find('a.tab2').css('background','#edad14').css('color','#fff');
         $('#content .slideMenu').find('a.tab4').css('background','#edad14').css('color','#fff');
         }else if(scroll > $('#content .con1').offset().top -160){
         $('#content .slideMenu').find('a.tab4').css('background','#fff').css('color','#edad14');
         $('#content .slideMenu').find('a.tab1').css('background','#edad14').css('color','#fff');
         $('#content .slideMenu').find('a.tab3').css('background','#edad14').css('color','#fff');
         }

    
    });

        
        $('.slideMenu a').click(function(e){
        e.preventDefault();
   
         var value=0;
 
         if($(this).hasClass('tab1')){
            value= $('#content .con1').offset().top -160;
         }else if($(this).hasClass('tab2')){
            value= $('#content .con2').offset().top -160; 
         }else if($(this).hasClass('tab3')){
            value= $('#content .con3').offset().top -160; 
         }else if($(this).hasClass('tab4')){
            value= $('#content .con4').offset().top -160; 
         }
         
       $("html,body").stop().animate({"scrollTop":value},800);
     });

  });
      