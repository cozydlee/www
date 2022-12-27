$(document).ready(function(){
    
    $('.check_agree').on('click',check_agree);

    function check_agree(e){

    var checkboxLength=$('input[type="checkbox"]').length;
    var checkedLength=$('input[type="checkbox"]:checked').length;

        if(checkboxLength != checkedLength){
            alert("수집하는 개인정보 항목에 동의해야 가입하실 수 있습니다.");
            e.preventDefault();
        }else{
            location.href="member_form.php"; 
        }

    }

    $('.allcheck').toggle(function(e){
        e.preventDefault();
        $('input[type="checkbox"]').attr('checked',true);
        $('.join .allcheck').css({background:'#edad14',border:'none'})
    },function(){
        $('input[type="checkbox"]').attr('checked',false);
        $('.join .allcheck').css({background:'transparent',border:'1px solid #fff'})
    });

    $('.check').on('mouseleave',check_2);

    function check_2(e){
    
        var checkboxLength=$('input[type="checkbox"]').length;
        var checkedLength=$('input[type="checkbox"]:checked').length; 

    if(checkboxLength != checkedLength){
        $('.join .allcheck').css({background:'transparent',border:'1px solid #fff'})
        e.preventDefault();
    }else{ 
        $('.join .allcheck').css({background:'#edad14',border:'none'})
    }
    }

   });


function join_cancel(){
   history.go(-1);
}















