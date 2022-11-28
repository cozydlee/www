$(document).ready(function(){

    $.ajax({
        url: './js/character.json',
        dataType: 'json',
        success: function(data){
    var inside = data.character;

    $('.characters .ch_box img').attr('src','./images/ch_image1.png');
    $('.ch_box span').html(inside[0].name);
    $('.caption p').html(inside[0].information);

    $('.characters li a img').click(function(e){
        e.preventDefault();
        
        var ind = $(this).index('.characters li a img');
        var ind2 = $('.change').index('.characters li a img')

        $('.change').attr('src','./images/character_before'+(ind2+1)+'.jpg').removeClass('change')
  
        $('.characters .ch_box img').attr('src','./images/ch_image'+(ind+1)+'.png');
  
        $('.ch_box span').html(inside[ind].name);
        $('.caption p').html(inside[ind].information);
        $(this).attr('src','./images/character'+(ind+1)+'.jpg');
        $(this).addClass('change')

        var position = $("#cap").offset().top;
        $("html, body").animate({scrollTop: position}, 200);
    });

        }    
    });
});
