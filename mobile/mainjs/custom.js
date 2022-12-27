$(document).ready(function(){  		
    
 var startX, endX;
 var imgCount;
 var imgSize;
 var imgIndex=0; 
 var spanBtn='';
  
  imgCount=$('.gallery_swiper li').length; 
  imgSize=$(window).width(); 
  $('.gallery_swiper li').width(imgSize);  
 
  $('.gallery_swiper').append("<div class='pageNum'></div>"); 
  for(var i=1; i<=imgCount;i++){
      spanBtn+='<span></span>';
  }
  $('.gallery_swiper .pageNum').html(spanBtn);    
    
  $('.gallery_swiper .pageNum span:eq(0)').css({'background':'#000'});  
    
 

$('.gallery_swiper').on('touchstart mousedown',function(e){
  
 e.preventDefault();
       
 startX=e.pageX || e.originalEvent.touches[0].pageX;
       
});
    
    



$('.gallery_swiper').on('touchend mouseup',function(e){
    
 e.preventDefault();
       
 endX=e.pageX || e.originalEvent.changedTouches[0].pageX;
        
     
       
 if(startX<endX) {  
     imgIndex--;
     
      if(imgIndex<0)imgIndex=0;
     $('.gallery_swiper ul').animate({left:-imgSize*imgIndex},'slow');
     
 }else{      
     imgIndex++;
     if(imgIndex>=imgCount)imgIndex=imgCount-1;
     $('.gallery_swiper ul').animate({left:-imgSize*imgIndex},'slow');
 }
      
  $('.gallery_swiper .pageNum span').css({'background':'#fff'});
  $('.gallery_swiper .pageNum span:eq('+imgIndex+')').css({'background':'#000'});
    
    
 });
    
    

    
$(window).resize(function(){   
      imgSize = $(window).width(); 
       $('.gallery_swiper li').width(imgSize); 
       $('.gallery_swiper ul').css('left',-imgSize*imgIndex);
});  
  
  

  

});















