$(document).ready(function() {

    $.ajax({
        url: './js/cast.json',
        dataType: 'json',
        success: function(data){
    var inside = data.cast;

    $('.cast_name a').click(function(e){
        e.preventDefault();
        
        var ind = $(this).index('.cast_name li a');
        info = inside.info
        info2 = inside.info2
        
        $('.memos p span:eq(0)').html(inside[ind].info);
        $('.memos p span:eq(1)').html(inside[ind].info2);

    });

    $('.main_cast div p').clone().appendTo('.memos') 

            }
        });

    $( window ).resize(function() {
        if($(window).width()<641){
            $('.cast_name li a').click(function(e){
                e.preventDefault();
            

                $('.modal_box2').fadeIn('fast');
                $('#Memo').fadeIn('fast');
            });
            
                $('.close_btn,.cast_name li a').click(function(e){
                  e.preventDefault();
                  $('.modal_box2').hide();
                  $('#Memo').hide();
              });
        }
     });

});