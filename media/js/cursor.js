$(document).ready(function(){
    $(document).mousemove(function(e){
        e.preventDefault();
    
        var mouseX = e.pageX;
        var mouseY = e.pageY;

        $('.cursor').css({
            left: mouseX + "px",
            top : mouseY + "px"
        })
    
    if( mouseY > 4000 && mouseY < 5100){
        $('.cursor').removeClass('hidden').addClass('magictime swashIn')
    }else{
        $('.cursor').addClass('hidden')
    }
    });


});
    

