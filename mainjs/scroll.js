$(document).ready(function () {

    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();

        if(scroll>=100 && scroll<600){
            $('.slide_title').addClass('boxMove');
        }else if(scroll>=600 && scroll<1300){
            $('.winterBird').addClass('boxMove1');
        }else if(scroll>=1400 && scroll<2000){
            $('.birdHouse').addClass('boxMove2');
        }else if(scroll>=2600 && scroll<3400){
            $('.dictionary').addClass('boxMove');
            $('.dicTitle').addClass('boxMove');
            $('.dicIndex').addClass('boxMove1');
            $('.dicIndex').addClass('boxMove1');
        }else if(scroll>=3500 && scroll<4300){
            $('.issueInner').addClass('boxMove');
            $('.issueList').addClass('boxMove1');
        }else if(scroll>=4300 && scroll<6000){
            $('.announce').addClass('boxMove');
        }

        
    });


});