    var qna ='';

    var what=['질문 1','질문 2','질문 3','질문 4','질문 5','질문 6','질문 7','질문 8','질문 9','질문 10'];
    var qnaText=['새 종류가 궁금해요.','새를 주웠어요','새를 구조할 때 어디다가 연락드리면 되죠?',
    '철새란 무엇인가요?','텃새란 무엇인가요?','철새 다리에 가락지같은 것이 있어요.','조류랑 파충류는 친척인가요?',
    '새 꿈을 꾸었습니다. 해몽 좀 부탁드릴게요.','미래에 조류학자가 되고 싶습니다. 어떻게 해야하죠?','가장 장수하는 새'];
    var answer=['- 데리고 오세요.','- 데리고 오세요.','- 저희에게 연락주세요. 02-749-4747',
    '- 홈페이지 철새 모이주기 참고하세요.','- 사계절에 적응해서 이동이 필요없는 새를 말합니다.','- 연구용입니다.',
    '- 석형류라고 묶어불렀던 적이 있었으나 이제 사용 안합니다.','조류가 많이 나오면 행운,자식,소원 등 좋은 길조라고 봅니다.',
    '생물학과에서 조류에 대한 연구를 합니다. 그 쪽으로 진학을 권장드립니다.','콘도르 70년']

    qna += '<ul>';

    for(var i=0; i<what.length; i++){
        qna += '<li class="qnaList">';
            qna += '<p class="q">'+ '<i>' + '</i>' + '<em>'+ what[i] +'</em>' + '<a class="trigger" href="#">'+ qnaText[i] + 
            '</a>' + '<span>' + '</span>' + '</p>';
            qna += '<p class="a">'+ '<i>' + '</i>' + answer[i] + '</p>';
        qna +='</li>';
    }

    qna += '<ul>';

$('.faq').html(qna);

    var article = $('.faq .qnaList');  //모든 질문 답변 리스트
    article.find('span').html('<i class="fas fa-chevron-down"></i>');
    $('.faq .qnaList:first').find('.a').slideDown(100);
    $('.faq .qnaList:first').find('span').html('<i class="fas fa-chevron-up"></i>');

	$('.faq .qnaList .trigger').click(function(e){  // 각각의 질문을 클릭하면
	    e.preventDefault();  //<a href="#"> 태그 링크 처리
        var myArticle = $(this).parents('.qnaList'); //클릭한 해당 list 
	
        if(myArticle.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
            article.find('.a').slideUp(100); //모든 답변을 닫아라
            article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
            article.find('span').html('<i class="fas fa-chevron-down"></i>');

            myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
            myArticle.find('.a').slideDown(100);  //해당 리스트의 답변을 열어라  
            myArticle.find('span').html('<i class="fas fa-chevron-up"></i>');
        } else {  // 'show' 답변이 열려있냐??
            myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
            myArticle.find('.a').slideUp(100);  //해당 리스트의 답변을 닫아라  
            myArticle.find('span').html('<i class="fas fa-chevron-down"></i>');
        }
    });