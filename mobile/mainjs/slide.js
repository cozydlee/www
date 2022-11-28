$(document).ready(function(){  		
    
 var startX, endX;
 var position = 0; //최초위치
 var movesize = 115; //이미지 하나의 너비(리뷰)

 $('.goodslist').after($('.goodslist').clone()).after($('.goodslist').clone()); //슬라이드 겔러리를 한번 복제

    $('.list_box').on('touchstart mousedown',function(e){
    
        if(e.pageX==undefined){  //모바일이면...
            startX = e.originalEvent.touches[0].pageX;
          }else{  //데스크탑이면..
            e.preventDefault();
            startX=e.pageX;
          }
        
    });
        
    $('.list_box').on('touchend mouseup',function(e){
        
        if(e.pageX==undefined){
            endX = e.originalEvent.changedTouches[0].pageX;
         }else{
           
           e.preventDefault();
           endX=e.pageX ;
         }
            
    //$('body').append(endX + '<br>');
        
    if(startX-endX>20) {
        //$('body').append(' 오른쪽으로 터치드래그' + '<br>');
        if (position <= -460) {
            $('.list_div').css('left', 0);
            position = 0;
        }
        position -= movesize; // 400씩 감소
        $('.list_div').stop().animate({
            left: position
        }, 'slow', function () {
            if (position <= -460) {
                $('.list_div').css('left', 0);
                position = 0;
            }
        }).clearQueue();
        
    }else if(startX-endX<-20){      
        //$('body').append(' 왼쪽로 터치드래그' + '<br>');
        if (position >= 0) { // 처음에 다음버튼을 클릭하면 빠르게 옮겨주기(이전 버튼은 원래 있으니 괜춘)
            $('.list_div').css('left', -460);
            position = -460;
        }
        position += movesize; // 150씩 증가
        $('.list_div').stop().animate({
            left: position
        }, 'slow', function () { // 포문 : 다음버튼 클릭했을 때 이미지 위치가 0일경우 옮겨주기				
            if (position == 0) {
                $('.list_div').css('left', -460);
                position = -460;
            }
        }).clearQueue();
    }
  
});

});















