

$(document).ready(function(){
    var cnt=$('.eventPic li').size();

    $(".contlist").hide();
    $(".contlist2").hide(); 
    $('.contlist:eq(0)').show(); 
    $('.contlist2:eq(0)').show(); 
    $('.event_title li:eq(0)').css('background-color','#fff')
    $('.event_title li:eq(0) a').css('color','#edad14').css('font-weight','600')
    
    $('.tab').each(function (index) {  
      $(this).click(function(e){  
          e.preventDefault();  

          $(".contlist").hide(); 
          $(".contlist:eq("+index+")").show(); 
          $(".contlist:eq("+index+")").fadeIn('slow');
          
          $(".contlist2").hide(); 
          $(".contlist2:eq("+index+")").show();
          $(".contlist2:eq("+index+")").fadeIn('slow');
          
          $(".event_title li").css('background-color','#edad14')
          $(".event_title li a").css('color','#f0f0f0').css('font-weight','500')

          if ($(this).hasClass('current3')) {
            $('.tab').removeClass('current3')
          }else{
            $('.tab').removeClass('current3')
            $(this).addClass('current3')
          }
     });
     $(this).click(function(e){
      e.preventDefault();
      $(".event_title li:eq("+index+")").css('background-color','#fff')
      $(".event_title li:eq("+index+") a").css('color','#edad14').css('font-weight','600')
    }); 

    });

  });

