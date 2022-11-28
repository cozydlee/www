$(document).ready(function(){

    $.ajax({
        url: './js/cast.json',
        dataType: 'json',
        success: function(data){
    var inside = data.cast;

    $('.cast_pic li:eq(0)').css({background: "url(./sub_imges/castA1.jpg) no-repeat 45% 9%"});
    $('.cast_pic li:eq(1)').css({background: "url(./sub_imges/castB1.jpg) no-repeat 45% 9%"});
    $('.main_cast p span:eq(0)').html(inside[0].info);
    $('.main_cast p span:eq(1)').html(inside[0].info2);
    $('.cast_name a:eq(0)').hover();

    $('.cast_name a').click(function(e){
        e.preventDefault();
        
        var ind = $(this).index('.cast_name li a');
        info = inside.info
        info2 = inside.info2

        $('.main_cast p span:eq(0)').html(inside[ind].info);
        $('.main_cast p span:eq(1)').html(inside[ind].info2);

        $('.cast_pic li:eq(0)').css({background: "url(./sub_imges/castA"+(ind+1)+".jpg) no-repeat 45% 9%"});
        $('.cast_pic li:eq(1)').css({background: "url(./sub_imges/castB"+(ind+1)+".jpg) no-repeat 45% 9%"});
        $('.cast_name a').hover().css({filter: 'none'});
        $(this).hover().css({filter: 'drop-shadow(3px -1px 9px #f0f0f0)'});

        var position = $("#cap").offset().top;
        $("html, body").animate({scrollTop: position}, 200);
    });

        }    
    });
});
