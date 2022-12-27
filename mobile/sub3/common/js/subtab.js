$(document).ready(function() {

 $('.subNav .choice').find('span').html('<i class="fa-solid fa-chevron-down"></i>')

 $('.subNav .choice').toggle(function(){
   $('.subNav .aList').fadeIn('fast');
   $('.subNav').css('border-radius','27px 27px 0 0');
 },function(){
       $('.subNav .aList').fadeOut('fast');
       $('.subNav').css('border-radius','27px');
 });

   $('.subNav .choice').on('focus', function () {        
             $('.subNav .aList').fadeIn('fast');
             $('.subNav').css('border-radius','27px 27px 0 0');
      });
      $('.subNav .aList li:last a').on('blur', function () {        
             $('.subNav .aList').fadeOut('fast');
             $('.subNav').css('border-radius','27px');
      });

});