// JavaScript Document

$(document).ready(function(){
    // var cnt=3;  //탭메뉴 개수 ***
    var cnt=$('.eventPic li').size();

    $(".contlist").hide(); //모든 탭내용을 안보이게...
    $(".contlist2").hide(); //모든 탭내용을 안보이게...
    $('.contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.contlist2:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.event_title li:eq(0)').css('background-color','#fff')
    $('.event_title li:eq(0) a').css('color','#edad14').css('font-weight','600')
    
    $('.tab').each(function (index) {  // index=0 1 2
      $(this).click(function(e){  //각각의 탭메뉴를 클릭하면... 
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다 

          $(".contlist").hide(); //모든 탭내용을 안보이게...
          $(".contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
          $(".contlist:eq("+index+")").fadeIn('slow');
          
          $(".contlist2").hide(); //모든 탭내용을 안보이게...
          $(".contlist2:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
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
    }); // 클릭한 해당 탭메뉴만 활성화

    });

  });

