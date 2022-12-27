

$(document).ready(function() {

  $('.rescue_box').click(function(e){
    e.preventDefault();

    $('.modal_box2').fadeIn('fast');
    $('#accuseMemo').fadeIn('slow');

});

    $('.close_btn,.modal_box2').click(function(e){
      e.preventDefault();
      $('.modal_box2').hide();
      $('#accuseMemo').hide();
  });
   
   });