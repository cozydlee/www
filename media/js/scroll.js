$(document).ready(function () {

    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        var section1Offset = $('.info').offset();
        var section2Offset = $('.characters').offset();

        if(scroll < section1Offset.top-200){
            $('#headerArea').css({'background':'none'})
        }
        else if(scroll > section1Offset.top-200){
            $('.info').removeClass('invisible').addClass('magictime slideLeftReturn')
            $('#headerArea').css({'background':'rgba(3,3,3,.7)'})
        }

        if(scroll < section2Offset.top-650){

            $('.characters ul').addClass('magictime spaceOutDown');
        }
        else if(scroll > section2Offset.top-300){
            $('.characters ul').removeClass('magictime spaceOutDown').removeClass('invisible').addClass('magictime spaceInDown');
        }
        
    });


});