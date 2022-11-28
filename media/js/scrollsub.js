$(document).ready(function () {

    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll < 200){
            $('#headerArea').css({'background':'none'})
        }
        else if(scroll > 200){
            $('#headerArea').css({'background':'rgba(3,3,3,.7)'})
        }

    });


});