collection = ['sound/deepbark.mp3','sound/1.mp3','sound/2.mp3','sound/4.mp3']

var count = 0

document.querySelector("#canvas").addEventListener("click", function () {
    d = Math.floor(Math.random() * (collection.length));
    var audio = new Audio(collection[d]);
    audio.volume = 0.3;
    count++;
    if(count%2 == 0){
        audio.pause()
    }else{
        audio.play()
    }
    console.log(count)
}
);

function skill(){
    for (let i = 1; i < 27; i++) {
        document.querySelector("#skill").innerHTML += `<img src="./img/`+[i]+`.png" alt="아이콘">`
    }
}

skill()

function hand(){
    for (let i = 2; i < 8; i++) {
    document.querySelector("#section"+[i]).innerHTML += `<img id="hand" src="./img/hand1.png" alt="손">`
    document.querySelector("#section"+[i]).innerHTML += `<div id="circle" class="color`+[i]+`"></div>`
    }
}

hand()

var hand2 = function () {
    let id = document.querySelector('div.active').getAttribute('id')

if(document.querySelector("#"+[id]+" #hand").getAttribute('src') == './img/hand1.png'){
    document.querySelector("#"+[id]+" #hand").animate([
        { left: "-50%"},
        { left: "40%"},
        { left: "40%"},
        { left: "-50%"}
    ], 3000);
    document.querySelector("#"+[id]+" #circle").animate([
        { width: "25%", height: "50%"},
        { width: "50%", height: "100%"},
        { width: "100%", height: "200%"},
        { width: "200%", height: "300%"}
    ], {duration: 2100, delay: 2100, fill:'forwards', easing: 'ease-in-out'});
    setTimeout(() => document.querySelector("#"+[id]+" #hand").setAttribute('src', './img/hand2.png'), 2000)
    setTimeout(() => document.querySelector("#"+[id]+" h1").style.display = 'none', 2000);
    document.querySelector("#"+[id]+" #article").animate([
        { left: "-40%"},
        { left: "1%"},
        { left: "0%"},
    ],{duration: 1300, delay: 3400,fill:'forwards', easing: 'ease-in-out'});
    document.querySelector("#"+[id]+" #gif").animate([
        { transform: "translate(-50%, -800px)"},
        { transform: "translate(-50%, -40%)"},
        { transform: "translate(-50%, -50%)"},
    ],{duration: 1300, delay: 4400,fill:'forwards', easing: 'ease-in-out'});
    document.querySelector("#"+[id]+" #subpic1").animate([
        { top: "107%"},
        { top: "55%"},
    ],{duration: 1300, delay: 4900,fill:'forwards', easing: 'ease-in-out'});
    document.querySelector("#"+[id]+" #subpic2").animate([
        { top: "87%"},
        { top: "39%"},
    ],{duration: 1300, delay: 5900,fill:'forwards', easing: 'ease-in-out'});
}else{
    document.querySelector("#"+[id]+" h1").style.display = 'none'
}

}

window.addEventListener('mousewheel', hand2);
document.querySelector('#menu').addEventListener('click', hand2);







