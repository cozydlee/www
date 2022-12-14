<?
	session_start();

    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>한국조류보호협회-아이디찾기</title>
<link rel="stylesheet" href="../../common/css/common.css">
<link rel="stylesheet" href="css/member1.css">
<script src="https://kit.fontawesome.com/f8a0f5a24e.js" crossorigin="anonymous"></script>
<script src="../member/js/jquery-1.12.4.min.js"></script>
<script src="../member/js/jquery-migrate-1.4.1.min.js"></script>
<script>
	$(document).ready(function() {

         $(".find").click(function() { 
            var name = $('#name').val(); 
            var hp1 = $('#hp1').val();
            var hp2 = $('#hp2').val(); 
            var hp3 = $('#hp3').val(); 

            $.ajax({
                type: "POST",
                url: "find.php", 
                data: "name="+ name+ "&hp1="+hp1+ "&hp2="+hp2+ "&hp3="+hp3,  
                cache: false, 
                success: function(data)
                {
                     $("#loadtext").html(data);
                }
            });
             
            $("#loadtext").addClass('loadtexton'); 
        }); 

    });
</script>
</head>
<body>
    <div id="wrap">
    <h1><a href="../../index.html" class="logo">한국조류보호협회</a></h1>
	<div id="col2">
        <form name="find" method="post" action="find.php"> 
		<div id="title">
			<h2>아이디찾기</h2>
			<p>가입 시 입력하신 정보로 아이디를 찾아드립니다</p>
		</div>
       
		<div id="login_form">
			 <div class="clear"></div>

			 <div id="login2">
				<div id="id_input_button">
					<fieldset>
                        <span>이름:</span><input type="text" name="name" class="find_input" id="name">
                        <div class="telBox">
                            <label class="hidden" for="hp1">연락처 앞3자리</label>
                            <span>연락처:</span>
                            <select name="hp1" id="hp1" title="휴대폰 앞3자리를 선택하세요." class="find_input">
                                <option>010</option>
                                <option>011</option>
                                <option>016</option>
                                <option>017</option>
                                <option>018</option>
                                <option>019</option>
                            </select> ㅡ
                            <label class="hidden" for="hp2">연락처 가운데3자리</label>
                            <input class="find_input" type="text" id="hp2" name="hp2" title="연락처 가운데3자리를 입력하세요." maxlength="4" > ㅡ
                            <label class="hidden" for="hp3">연락처 마지막3자리</label>
                            <input class="find_input" type="text" id="hp3" name="hp3" title="연락처 마지막3자리를 입력하세요." maxlength="4" >
                        </div>
                        <input type="button" value="아이디찾기" class="find">
                    </fieldset>

                    <span id="loadtext">


                    </span>

                    <ul class="go">
                        <li><a href="login_form.php"><i class="fas fa-sign-in-alt"></i>로그인하기</a></li>
                        <li>비밀번호를 잊으셨나요?<a href="pw_find.php">비밀번호 찾기</a></li>
                    </ul>

				</div>
				<div class="clear"></div>
				
                <div id="login_line"></div>
				<div id="join_button"><p>아직도 회원이 아니신가요?</p><a href="../member/join.html" class="go_join">회원가입</a></div>
			 </div>			 
		</div> 

	    </form>
	</div> 

</div> 
</body>
</html>