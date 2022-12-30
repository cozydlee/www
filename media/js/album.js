$(document).ready(function(){

    $(".song_list").html(`<ul></ul>`)

    $.ajax({
        url: './js/album.json',
        dataType: 'json',
        success: function(data){
                var inside = data.track;

                for (value of inside) {
                    $(".song_list ul").append(`<li><a href="#container">` + value['title'] + `</a></li>`);
                        }
                        
                $(".song_list ul li").click(function(){
                    var idx = $(this).index();
                    $("#container iframe").attr("src",`https://www.youtube.com/embed/`+ inside[idx].src +`?enablejsapi=1&amp;origin=https%3A%2F%2Feindjel2.cafe24.com&amp;widgetid=1`)
                })
        }
    });
});
