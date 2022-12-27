$(document).ready(function(){  		
    
 var startX, endX;
 var position = 0; 
 var movesize = 115; 

 $('.goodslist').after($('.goodslist').clone()).after($('.goodslist').clone()); 

    $('.list_box').on('touchstart mousedown',function(e){
    
        if(e.pageX==undefined){  
            startX = e.originalEvent.touches[0].pageX;
          }else{  
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
            
        
    if(startX-endX>20) {
        if (position <= -460) {
            $('.list_div').css('left', 0);
            position = 0;
        }
        position -= movesize; 
        $('.list_div').stop().animate({
            left: position
        }, 'slow', function () {
            if (position <= -460) {
                $('.list_div').css('left', 0);
                position = 0;
            }
        }).clearQueue();
        
    }else if(startX-endX<-20){      
        if (position >= 0) { 
            $('.list_div').css('left', -460);
            position = -460;
        }
        position += movesize; 
        $('.list_div').stop().animate({
            left: position
        }, 'slow', function () {			
            if (position == 0) {
                $('.list_div').css('left', -460);
                position = -460;
            }
        }).clearQueue();
    }
  
});

});















