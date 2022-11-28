
$(document).ready(function() {
  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();});
          $('#headerArea').animate({height:300},'fast').clearQueue();
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); 
          $('#headerArea').animate({height:120},'fast').clearQueue();
     });
    
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1',this).css('color','#edad14').css('transition','all .5s');
       },function() {
          $('.depth1',this).css('color','#333').css('transition','all .5s'); 
     });
     

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:300},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.menu li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:120},'normal').clearQueue();
    });
});
