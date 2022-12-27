    var position = 0; 
    var movesize = 1113; 
    $('.issue .issueList').after($('.issue .issueList').clone()); 
    $('.issue .issueBtn').click(function (e) { 
        e.preventDefault();

        if ($(this).is('.issue .m1')) {
            if (position <= -1113) {
                $('.issue .listDiv').css('left', 0);
                position = 0;
            }
            position -= movesize; 
            $('.issue .listDiv').stop().animate({
                left: position
            }, 'slow', function () {
                if (position <= -1113) {
                    $('.issue .listDiv').css('left', 0);
                    position = 0;
                }
            });

        } else if ($(this).is('.issue .m2')) { 
            if (position >= 0) { 
                $('.issue .listDiv').css('left', -1113);
                position = -1113;
            }
            position += movesize;
            $('.issue .listDiv').stop().animate({
                left: position
            }, 'slow', function () {		
                if (position == 0) {
                    $('.issue .listDiv').css('left', -1113);
                    position = -1113;
                }
            });
        }
    });