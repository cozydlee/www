    /*슬라이드*/
    var position = 0; //최초위치
    var movesize = 1113; //이미지 하나의 너비(리뷰)
    $('.issue .issueList').after($('.issue .issueList').clone()); //슬라이드 겔러리를 한번 복제
    $('.issue .issueBtn').click(function (e) { //버튼 클릭 시
        e.preventDefault();

        if ($(this).is('.issue .m1')) { //이전버튼 클릭
            if (position <= -1113) {
                $('.issue .listDiv').css('left', 0);
                position = 0;
            }
            position -= movesize; // 400씩 감소
            $('.issue .listDiv').stop().animate({
                left: position
            }, 'slow', function () {
                if (position <= -1113) {
                    $('.issue .listDiv').css('left', 0);
                    position = 0;
                }
            });

        } else if ($(this).is('.issue .m2')) { //다음버튼 클릭
            if (position >= 0) { // 처음에 다음버튼을 클릭하면 빠르게 옮겨주기(이전 버튼은 원래 있으니 괜춘)
                $('.issue .listDiv').css('left', -1113);
                position = -1113;
            }
            position += movesize; // 150씩 증가
            $('.issue .listDiv').stop().animate({
                left: position
            }, 'slow', function () { // 포문 : 다음버튼 클릭했을 때 이미지 위치가 0일경우 옮겨주기				
                if (position == 0) {
                    $('.issue .listDiv').css('left', -1113);
                    position = -1113;
                }
            });
        }
    });