$(document).ready(function() {

var template = $(".form-block").clone();
var form = $(".form-main");
var i = ($('.form-block tr').length);

$('.add-more-btn').on('click',function() {
var newFormBlock = template.clone();
form.append(newFormBlock);
});

$('.remove-more-btn').on('click',function() {
$('.form-block:eq(0)').remove();
});

}); 