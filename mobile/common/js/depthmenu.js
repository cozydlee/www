$(document).ready(function() {

    var article = $('.menu .depth1');
    article.find('span').html('<i class="fa-solid fa-chevron-down"></i>');

	$('.menu .trigger').click(function(e){ 
	    e.preventDefault(); 
        var myArticle = $(this).parents('.depth1'); 
	
        if(myArticle.hasClass('hide')){  
            article.find('.depth2').slideUp(100);
            article.removeClass('show').addClass('hide'); 
            article.find('span').html('<i class="fa-solid fa-chevron-down"></i>');

            myArticle.removeClass('hide').addClass('show'); 
            myArticle.find('.depth2').slideDown(100);    
            myArticle.find('span').html('<i class="fa-solid fa-chevron-up"></i>');
        } else {  
            myArticle.removeClass('show').addClass('hide'); 
            myArticle.find('.depth2').slideUp(100); 
            myArticle.find('span').html('<i class="fa-solid fa-chevron-down"></i>');
        }
    });

});