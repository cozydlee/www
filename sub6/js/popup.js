
//팝업창
$(document).ready(function() {


    $.ajax({
        url: './js/letter.json',
        dataType: 'json',
        success: function(data){
            var inside = data.letter;

            function print(){

                var letterTxt = '<ul class="letterMenu">';

                for(var i in inside){
                    letterTxt += '<li>';
					letterTxt += '<div>';
					letterTxt += '<span>' + inside[i].title + '</span>'
					letterTxt += '<a href="#">' + "<i class=" + inside[i].icon + ">" + '</i>' + '</a>';
					letterTxt += '<a href="#" class="a hidden">' + inside[i].hover + '</a>';
					letterTxt += '</div>'
					letterTxt += '</li>';
                }

                letterTxt += '</ul>';

                $('.letterList').html(letterTxt);

            }
            print();

            //메뉴 변환
            $(this).ready(function(){

                $(".contentArea .letterMenu li:eq(0)").hover(function(e){
                    e.preventDefault();
                    $(".letterMenu div i:eq(0)").addClass('hidden').fadeOut('fast',function(){$(this).stop();});
                    $(".letterMenu div .a:eq(0)").removeClass('hidden').fadeIn('fast',function(){$(this).stop();});
                },function(e){
                    e.preventDefault();
                    $(".letterMenu div i:eq(0)").removeClass('hidden').fadeIn('fast',function(){$(this).stop();});
                    $(".letterMenu div .a:eq(0)").addClass('hidden').fadeOut('fast',function(){$(this).stop();});
                });
            
                $(".contentArea .letterMenu li:eq(1)").hover(function(e){
                    e.preventDefault();
                    $(".letterMenu div i:eq(1)").addClass('hidden').fadeOut('fast',function(){$(this).stop();});
                    $(".letterMenu div .a:eq(1)").removeClass('hidden').fadeIn('fast',function(){$(this).stop();});
                },function(e){
                    e.preventDefault();
                    $(".letterMenu div i:eq(1)").removeClass('hidden').fadeIn('fast',function(){$(this).stop();});
                    $(".letterMenu div .a:eq(1)").addClass('hidden').fadeOut('fast',function(){$(this).stop();});
                });
            
                $(".contentArea .letterMenu li:eq(2)").hover(function(e){
                    e.preventDefault();
                    $(".letterMenu div i:eq(2)").addClass('hidden').fadeOut('fast',function(){$(this).stop();});
                    $(".letterMenu div .a:eq(2)").removeClass('hidden').fadeIn('fast',function(){$(this).stop();});
                },function(e){
                    e.preventDefault();
                    $(".letterMenu div i:eq(2)").removeClass('hidden').fadeIn('fast',function(){$(this).stop();});
                    $(".letterMenu div .a:eq(2)").addClass('hidden').fadeOut('fast',function(){$(this).stop();});
                });
            
            });


            // click
            $('.letterList ul li a').click(function(e){
                e.preventDefault();

                var ind = $(this).index('.letterList ul li a');

                function pop_change(){

                var letterTxt = '<div id="mailAddress">';
	                letterTxt += `
                    <form action="../../php/mail.php" method="post">
                    <p>제출양식</p>
                    <ul>
                     <li><input type="text" id="uname" name="uname" placeholder="Full name"></li>
                     <li><input type="text" id="email" name="email" placeholder="E-mail address"></li>
                     <li><input type="text" id="phone" name="phone" placeholder="Phone number"></li>
                     <li><textarea name="message"  placeholder="Message" cols="50" rows="15"></textarea></li>
                     <li><input type="submit" value="Send E-mail" class="submitBtn"></li>
                    </ul>
                    </form>
                    `
                letterTxt += '</div>';

                $('.txt').html(letterTxt);
                }

                $('.letterMenu a').click(function(e){
                    e.preventDefault();
              
                    $('.bgbox').fadeIn('fast');
                    $('.letter_view').fadeIn('slow');
            
                    pop_change();
                });

                $('.close').click(function(e){
                    e.preventDefault();
                    $('.bgbox').hide();
                    $('.letter_view').hide();
                });
            });
        }
    });
    
    var issueTxt = ''
    
    issueTxt = '<ul class="issueList">';

    for(var i=0; i<3; i++){
        issueTxt += '<li>';
        issueTxt += '<a href="#">';
        issueTxt += '<div class="issueImage">';
        issueTxt += '</div>'
        issueTxt += '</a>';
        issueTxt += '</li>';
    }

    issueTxt += '</ul>';

    $('.listDiv').html(issueTxt);

    for (var i=0; i<3; i++) {
	$(".listDiv div:eq("+[i]+")").css('background','url(./images/content2/issue'+[i]+'.jpg)').css('background-size','cover')
    }


    /*슬라이드*/
    var position = 0; //최초위치
    var movesize = 1200; //이미지 하나의 너비(리뷰)
    $('.issue .issueList').after($('.issue .issueList').clone()); //슬라이드 겔러리를 한번 복제
    $('.issue a.issueBtn').click(function (e) { //버튼 클릭 시
        e.preventDefault();

        if ($(this).is('.issue a.m1')) { //이전버튼 클릭
            
            if (position <= -1200) {
                $('.issue .listDiv').css('left', 0);
                position = 0;
            }
            position -= movesize; // 400씩 감소
            $('.issue .listDiv').stop().animate({
                left: position
            }, 'slow', function () {
                if (position <= -1200) {
                    $('.issue .listDiv').css('left', 0);
                    position = 0;
                }
            });

        } else if ($(this).is('.issue a.m2')) { //다음버튼 클릭
            if (position >= 0) { // 처음에 다음버튼을 클릭하면 빠르게 옮겨주기(이전 버튼은 원래 있으니 괜춘)
                $('.issue .listDiv').css('left', -1200);
                position = -1200;
            }
            position += movesize; // 150씩 증가
            $('.issue .listDiv').stop().animate({
                left: position
            }, 'slow', function () { // 포문 : 다음버튼 클릭했을 때 이미지 위치가 0일경우 옮겨주기				
                if (position == 0) {
                    $('.issue .listDiv').css('left', -1200);
                    position = -1200;
                }
            });
        }
    });

            // click

            $('.listDiv ul li a').click(function(e){
            var ind = $(this).index('.listDiv ul li a');
            if (3>ind){
                e.preventDefault();


                $('.issue_view').css('background','url(./images/content2/issue' + ind + '.jpg) center no-repeat')
                .css('background-size','contain');

                console.log(ind)

                function pop_change(){


                $('.txt').html(issueTxt);
                }

                $('.issueList a').click(function(e){
                    e.preventDefault();
                    
                    $('.pop_btn').fadeIn('slow');
                    $('.bgbox').fadeIn('fast');
                    $('.issue_view').fadeIn('slow');
            
                    pop_change();
                });

                $('.close').click(function(e){
                    e.preventDefault();
                    $('.bgbox').hide();
                    $('.issue_view').hide();
                    $('.pop_btn').fadeOut('fast');
                });

                $('.pop_btn a').click(function(e){
                    e.preventDefault();
             
                    $('.pop .popup').hide().fadeIn('slow'); 
                   
                   if($(this).hasClass('pre')){ // 3 2 1 0 3 2 1 0
                    $('.issue_view').css('background','url(./images/content2/issue' + ind + '.jpg) center no-repeat')
                    .css('background-size','contain');
                       pop_change();
                   }else if($(this).hasClass('next')){ // 0 1 2 3 0 1 2 3
                    $('.issue_view').css('background','url(./images/content2/issue' + ind + '_1.jpg) center no-repeat')
                    .css('background-size','contain');
                       pop_change();
                   }
             
               });
            }else if(ind>=3){
                e.preventDefault();

                $('.issue_view').css('background','url(./images/content2/issue' + (ind-3) + '.jpg) center no-repeat')
                .css('background-size','contain');

                console.log(ind)

                function pop_change(){


                $('.txt').html(issueTxt);
                }

                $('.issueList a').click(function(e){
                    e.preventDefault();
                    
                    $('.pop_btn').fadeIn('slow');
                    $('.bgbox').fadeIn('fast');
                    $('.issue_view').fadeIn('slow');
            
                    pop_change();
                });

                $('.close').click(function(e){
                    e.preventDefault();
                    $('.bgbox').hide();
                    $('.issue_view').hide();
                    $('.pop_btn').fadeOut('fast');
                });

                $('.pop_btn a').click(function(e){
                    e.preventDefault();
             
                    $('.pop .popup').hide().fadeIn('slow'); 
                   
                   if($(this).hasClass('pre')){ // 3 2 1 0 3 2 1 0
                    $('.issue_view').css('background','url(./images/content2/issue' + (ind-3) + '.jpg) center no-repeat')
                    .css('background-size','contain');
                       pop_change();
                   }else if($(this).hasClass('next')){ // 0 1 2 3 0 1 2 3
                    $('.issue_view').css('background','url(./images/content2/issue' + (ind-3) + '_1.jpg) center no-repeat')
                    .css('background-size','contain');
                       pop_change();
                   }
             
               });

            }
            });


        });


