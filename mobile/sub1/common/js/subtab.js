$(document).ready(function() {
  /*	
 $('.select .arrow').click(function(){
   $('.select .aList').fadeIn('slow');			  
 });

 $('.select .aList').mouseleave(function(){
   $(this).fadeOut('fast');			  
 });
 */

 $('.subNav .choice').find('span').html('<i class="fa-solid fa-chevron-down"></i>')

 $('.subNav .choice').toggle(function(){
   $('.subNav .aList').fadeIn('fast');
   $('.subNav').css('border-radius','27px 27px 0 0');
 },function(){
       $('.subNav .aList').fadeOut('fast');
       $('.subNav').css('border-radius','27px');
 });

 //tab키 처리
   $('.subNav .choice').on('focus', function () {        
             $('.subNav .aList').fadeIn('fast');
             $('.subNav').css('border-radius','27px 27px 0 0');
      });
      $('.subNav .aList li:last a').on('blur', function () {        
             $('.subNav .aList').fadeOut('fast');
             $('.subNav').css('border-radius','27px');
      });

});