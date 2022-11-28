$(document).ready(function(){

    $(".song_list").html(`<ul></ul>`)

    $.ajax({
        url: './js/album.json',
        dataType: 'json',
        success: function(data){
                var inside = data.track;

                for (value of inside) {
                    $(".song_list ul").append(`<li>` + value['title'] + `</li>`);
                        }                            
        }    
    });
});
