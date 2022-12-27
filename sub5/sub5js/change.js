$(document).ready(function() {

var cnt=0;
var total=0;

        $('.img_box li:eq(0)').fadeIn('slow');
        total = $('.img_box li').size();

        $('.next').click(function(){
            cnt++;
            if(cnt==total){
                cnt=0;
            }
            $('.img_box li').hide();
            $('.img_box li:eq('+cnt+')').fadeIn('slow');
        });

        $('.prev').click(function(){
            cnt--;
            if(cnt==-1){
                cnt=total-1;
            }
            $('.img_box li').hide();
            $('.img_box li:eq('+cnt+')').fadeIn('slow');
        });
        
        $('.arrowS a').click(function(e){
            e.preventDefault();
            var ind = $(this).index('.gallery li a');
    
            $('.arrowS a').children().css('filter','grayscale(0)')
            $(this).children().css('filter','grayscale(100%)')
        
        });
    }); 