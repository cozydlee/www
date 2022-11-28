$(document).ready(function () {

    $('.trailers .click_btn:eq(0)').css("z-index","10")

    $.ajax({
        url: './js/click.json',
        dataType: 'json',
        success: function(data){
    var text = data.text;

    var cnt = 1

    $('.prev').click(function(){
        if(cnt==1){
            cnt=4
           }
        cnt--;
        $('.thum img').attr('src','./images/youtube'+ [cnt] +'.jpg');
        $('.trailers dt').empty()
        $('.trailers dt').html(text[cnt-1].txt1)
        $('.trailers dd').empty()
        $('.trailers dd').html(text[cnt-1].txt2)
        $('.trailers .click_btn:eq('+ [cnt] +')').css("z-index","-1")
        $('.trailers .click_btn:eq('+ [cnt-1] +')').css("z-index","10")
        
    });

    $('.next').click(function(){
        if(cnt==3){
            cnt=0
           }
        cnt++;
        $('.thum img').attr('src','./images/youtube'+ [cnt] +'.jpg');
        $('.trailers dt').empty()
        $('.trailers dt').html(text[cnt-1].txt1)
        $('.trailers dd').empty()
        $('.trailers dd').html(text[cnt-1].txt2)
        $('.trailers .click_btn:eq('+ [cnt-2] +')').css("z-index","-1")
        $('.trailers .click_btn:eq('+ [cnt-1] +')').css("z-index","10")
    });

    }

});

});