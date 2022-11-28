$(document).ready(function(){

        $(".track_youtube li").clone().appendTo(".track_img")

    $.ajax({
        url: './js/track.json',
        dataType: 'json',
        success: function(data){
                var inside = data.track1;
                var insideB = data.track2;
                var insideC = data.track3;

                for (value of inside) {
                    $(".tracklist ul").append(`<li>` + value['title'] + `</li>`);
                        }

                $('.tracks .roll').toggle(function(e){
                    e.preventDefault();
                    $(".tracklist ul *").remove()
                    for (value of insideB) {
                        $(".tracklist ul").append(`<li>` + value['titleb'] + `</li>`);
                            }
                    $(".tracks .track_img li img:eq(0)").attr('src','./images/track6.jpg');
                    $(".tracks .track_img li img:eq(1)").attr('src','./images/track7.jpg');
                    $(".tracks .track_img li img:eq(2)").attr('src','./images/track8.jpg');
                },function(e){
                    e.preventDefault();
                    $(".tracklist ul *").remove()
                    for (value of insideC) {
                        $(".tracklist ul").append(`<li>` + value['titlec'] + `</li>`);
                            }
                    $(".tracks .track_img li img:eq(0)").attr('src','./images/track1.jpg');
                    $(".tracks .track_img li img:eq(1)").attr('src','./images/track2.jpg');
                    $(".tracks .track_img li img:eq(2)").attr('src','./images/track3.jpg');
                },
                function(e){ 
                    e.preventDefault();
                    $(".tracklist ul *").remove()
                    for (value of inside) {
                    $(".tracklist ul").append(`<li>` + value['title'] + `</li>`);
                        }
                    $(".tracks .track_img li img:eq(0)").attr('src','./images/track6.jpg');
                    $(".tracks .track_img li img:eq(1)").attr('src','./images/track7.jpg');
                    $(".tracks .track_img li img:eq(2)").attr('src','./images/track8.jpg');
                }
                
                        )          
                            
        }    
    });

    $('.tracks .roll').click(function(e){
        e.preventDefault();

        var position = $("#lists").offset().top;
        $("html, body").animate({scrollTop: position}, 200);
    });
    
        $(".tracklist").html(`<ul></ul>`)
});
