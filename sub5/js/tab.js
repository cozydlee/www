
$(document).ready(function(){
    var cnt=$('.contentArea h3').size();

    $('.contentArea .contlist:eq(0)').show(); 
    $('.contentArea a.tab1').css('background','#fff').css('color','#edad14');
    
    $('.contentArea .tab').each(function (index) {  
      $(this).click(function(e){  
          e.preventDefault();   

          $(".contentArea .contlist").hide(); 
          $(".contentArea .contlist:eq("+index+")").show();
          $(".contentArea .contlist:eq("+index+")").fadeIn('slow');
          $('.contentArea a.tab').css('background','#edad14').css('color','#fff');
          $(this).css('background','#fff').css('color','#edad14');

     });
    });

  });

