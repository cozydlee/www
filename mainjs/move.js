

$(document).ready(function() {

     var timeonoff;
     var imageCount=$('.gallery ul li').size();  
     var cnt=1;
     var onoff=true; 
     
     $('.btn1').css('background','#edad14'); 
     $('.btn1').css('width','30');
     
     $('.gallery .link1').fadeIn('slow'); 
  
     function moveg(){
       if(cnt==imageCount+1)cnt=1;
       if(cnt==imageCount)cnt=0;  
       cnt++;  
      
     $('.gallery li').fadeOut('slow'); 
      $('.gallery .link'+cnt).fadeIn('slow'); 
       
       $('.mbutton').css('background','#fff'); 
       $('.mbutton').css('width','16');
       $('.btn'+cnt).css('background','#edad14');
       $('.btn'+cnt).css('width','30');    
 
        if(cnt==imageCount)cnt=0;
      }
      
     timeonoff= setInterval( moveg , 6000);
 
    $('.mbutton').click(function(event){
           var $target=$(event.target); 
        clearInterval(timeonoff); 

          $('.gallery li').fadeOut('slow'); 
 
             if($target.is('.btn1')){  
                      cnt=1;
             }else if($target.is('.btn2')){ 
                      cnt=2; 
             }else if($target.is('.btn3')){ 
                      cnt=3; 
             }
 
             $('.gallery .link'+cnt).fadeIn('slow'); 

       $('.mbutton').css('background','#fff'); 
       $('.mbutton').css('width','16');
       $('.btn'+cnt).css('background','#edad14');
       $('.btn'+cnt).css('width','30');
 
       if(cnt==imageCount)cnt=0;  
      
       timeonoff= setInterval( moveg , 6000); 
      
       if(onoff==false){ 
             onoff=true; 
             $('.ps').html('<span class="hidden">play</span><i class="fa-solid fa-pause"></i>');
       }
       
     });

   $('.ps').click(function(){ 
      if(onoff==true){ 
             clearInterval(timeonoff);   
                $(this).html('<span class="hidden">stop</span><i class="fa-solid fa-pause"></i>'); 
          onoff=false;   
         }else{ 
              timeonoff= setInterval( moveg , 4000);
              $(this).html('<span class="hidden">play</span><i class="fa-solid fa-play"></i>');
              onoff=true; 
         }
   });	
 }); 