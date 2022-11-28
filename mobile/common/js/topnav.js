//네비게이션, top

$(document).ready(function() {
    var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
      
    $(".menu_ham").click(function(e) { //메뉴버튼 클릭시
        e.preventDefault();
        
        var documentHeight =  $(document).height();
        $("#gnb").css('height',documentHeight); // 전체 body의 높이를 네비에 높이로 반환
 
       if(op==false){ //네비가 닫혀있는 상태에서 클릭했냐??
         $("#gnb").animate({right:0,opacity:1}, 'fast');
         $('#headerArea').addClass('mn_open');
         op=true;
         $('.modal_box').fadeIn('slow');
       }else{ //네비가 열려있는 상태에서 클릭했냐??
         $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
         $('#headerArea').removeClass('mn_open');
         op=false;
         $('.modal_box').fadeOut('fast');
       }
 
    });
   
   });