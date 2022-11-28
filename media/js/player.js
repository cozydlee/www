var sound = new Howl({
src: ['./audio/Dream.mp3']
});

$("#play").on("click", function(){
    sound.pause();
    sound.play()
});

$(".click_btn").on("click", function(){
  sound.pause();
}); 

$("#pause").on("click", function(){
   sound.pause();
 }); 