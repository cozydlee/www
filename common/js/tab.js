// JavaScript Document

$(document).ready(function(){
    // var cnt=3;  //탭메뉴 개수 ***
    var cnt=$('.contentArea h3').size();

    $('.contentArea .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.contentArea a.tab1').css('background','#fff').css('color','#edad14'); //첫번째 탭메뉴 활성화
    
    $('.contentArea .tab').each(function (index) {  // index=0 1 2
      $(this).click(function(e){  //각각의 탭메뉴를 클릭하면... 
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다 

          $(".contentArea .contlist").hide(); //모든 탭내용을 안보이게...
          $(".contentArea .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
          $(".contentArea .contlist:eq("+index+")").fadeIn('slow');
          $('.contentArea a.tab').css('background','#edad14').css('color','#fff'); //모든 탭메뉴를 비활성화
          $(this).css('background','#fff').css('color','#edad14'); // 클릭한 해당 탭메뉴만 활성화

     });
    });

  });

