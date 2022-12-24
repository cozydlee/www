var xhr = new XMLHttpRequest();

xhr.onload = function (){
    if(xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);
    for (let i = 2; i < 8; i++) {
    document.querySelector("#section"+[i]).innerHTML += 
        `	
            <h1 class="word">`+ responseObject.article[i-2].word +`</h1>
            <div id="article">
            <dl>
                <dt>`+ responseObject.article[i-2].dt +`</dt>
                <dd>`+ responseObject.article[i-2].dd +`</dd>
            </dl>
            <div class="button">
                <a class="button2" href="`+ responseObject.article[i-2].href +`" target="_blank">방문하기</a>
            </div>
            <div class="qrcode block"><img src="`+ responseObject.article[i-2].qrcode +`" alt="qr코드"></div>
            <dl>
                <dt>제작기간</dt>
                <dd>`+ responseObject.article[i-2].date +`</dd>
            </dl>
            <dl>
                <dt>사용스킬</dt>
                <dd>`+ responseObject.article[i-2].skill +`
                </dd>
            </dl>
            </div>
            <div id="gif"></div>
            <div class="subgif1" id="subpic1"></div>
		    <div class="subgif2" id="subpic2"></div>
        `
        }
    }

    for (let i = 2; i < 8; i++) {
        let pic = document.querySelector("#section"+[i]+" > #gif")
        pic.className = 'newpic'+[i]
    
        console.log(pic)
        }


}

xhr.open('GET', 'https://eindjel2.cafe24.com/profill/js/article.json', true);
xhr.send(null);