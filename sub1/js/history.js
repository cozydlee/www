$(document).ready(function () {

    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        
        //sticky menu 처리
        if(scroll>=600){ 
            $('#content .slideMenu').find('a').addClass('navOn');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('header').hide();
        }else{
            $('#content .slideMenu').find('a').removeClass('navOn');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
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

        
           //슬라이드 메뉴 클릭시 해당 콘텐츠로 스스륵~~~ 이동
        $('.slideMenu a').click(function(e){
        e.preventDefault(); //href="#" 속성을 막아주는..메소드
   
         var value=0; //이동할 스크롤의 거리
 
         if($(this).hasClass('tab1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
            value= $('#content .con1').offset().top -160;  // 해당 콘테츠의 상단의 거리~~
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
      