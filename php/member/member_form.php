<? 
	session_start(); 

    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>회원가입</title>
    <link rel="stylesheet" href="../../common/css/common.css">
	<link rel="stylesheet" href="css/member_form.css">
	
    <script src="./js/jquery-1.12.4.min.js"></script>
    <script src="./js/jquery-migrate-1.4.1.min.js"></script>
    <script src="./js/goddamm.js"></script>
	<script>
	 $(document).ready(function() {
 
        
 $("input").keyup(function(){
    $("input").css({background:'#f0f0f0'})
 })
   
 $("#id").keyup(function() {   
    var id = $('#id').val();
    $.ajax({
        type: "POST",
        url: "check_id.php",
        data: "id="+ id,  
        cache: false, 
        success: function(data)
        {
             $("#loadtext").html(data);
        }
    });
});
		 
$("#nick").keyup(function() { 
    var nick = $('#nick').val();

    $.ajax({
        type: "POST",
        url: "check_nick.php",
        data: "nick="+ nick,  
        cache: false, 
        success: function(data)
        {
             $("#loadtext2").html(data);
        }
    });
});		 


});
	
	
	
	</script>
	<script>
   
   function check_input()
   {
      if (!document.member_form.id.value)
      {
          alert("아이디를 입력하세요");
          $('#id').css({background:'rgba(255,0,0,.5)'})
          document.member_form.id.focus();
          return;
      }

      if ($('#loadalert').css("display") == "inline")
      {
          alert("아이디는 숫자, 영문 대소문자만 사용 가능 다시입력하세요");
          $('#id').css({background:'rgba(255,0,0,.5)'})    
          document.member_form.id.focus();
          return;
      }

      if (!document.member_form.pass.value)
      {
          alert("비밀번호를 입력하세요");
          $('#pass').css({background:'rgba(255,0,0,.5)'})    
          document.member_form.pass.focus();
          return;
      }

      if ($('#loadalert2').css("display") == "inline")
      {
          alert("비밀번호는 숫자, 영문 대소문자만 사용 가능 다시입력하세요");
          $('#pass').css({background:'rgba(255,0,0,.5)'})        
          document.member_form.pass.focus();
          return;
      }

      if (!document.member_form.pass_confirm.value)
      {
          alert("비밀번호확인을 입력하세요");
          $('#pass_confirm').css({background:'rgba(255,0,0,.5)'})        
          document.member_form.pass_confirm.focus();
          return;
      }

      if (!document.member_form.name.value)
      {
          alert("이름을 입력하세요");
          $('#name').css({background:'rgba(255,0,0,.5)'})        
          document.member_form.name.focus();
          return;
      }

      if (!document.member_form.nick.value)
      {
          alert("닉네임을 입력하세요");
          $('#nick').css({background:'rgba(255,0,0,.5)'})    
          document.member_form.nick.focus();
          return;
      }


      if (!document.member_form.hp2.value || !document.member_form.hp3.value )
      {
          alert("휴대폰 번호를 입력하세요");
          $('#hp2').css({background:'rgba(255,0,0,.5)'})
          $('#hp3').css({background:'rgba(255,0,0,.5)'})           
          document.member_form.hp2.focus();
          return;
      }

      if (!document.member_form.email1.value || !document.member_form.email2.value )
      {
          alert("이메일을 입력하세요");
          $('#email1').css({background:'rgba(255,0,0,.5)'})
          $('#email2').css({background:'rgba(255,0,0,.5)'})           
          document.member_form.email2.focus();
          return;
      }

      if (document.member_form.pass.value != 
            document.member_form.pass_confirm.value)
      {
          alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
          document.member_form.pass.focus();
          document.member_form.pass.select();
          return;
      }

      document.member_form.submit(); 
   }

   function reset_form()
   {
      document.member_form.id.value = "";
      document.member_form.pass.value = "";
      document.member_form.pass_confirm.value = "";
      document.member_form.name.value = "";
      document.member_form.nick.value = "";
      document.member_form.hp1.value = "010";
      document.member_form.hp2.value = "";
      document.member_form.hp3.value = "";
      document.member_form.email1.value = "";
      document.member_form.email2.value = "";
	  
      document.member_form.id.focus();

      return;
   }
</script>
</head>
<body>
    <header>
    <a class="logo" href="../../index.html"><img src="../../common/images/headerLogo.png" alt=""></a> 
    </header>    
	 
	<article id="content">  
	  
	  <h2>회원가입</h2>
	  <form  name="member_form" method="post" action="insert.php"> 
		
     <table>
     	<tr>
     		<th scope="col"><label for="id">아이디</label></th>
     		<td>
     			 <input type="text" name="id" id="id" onkeyup="check_input2()" required>
			     <span id="loadtext"></span><span id="loadalert"></span>
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="pass">비밀번호</label></th>
     		<td>
     			 <input type="password" name="pass" id="pass" onkeyup="check_input3()" required>
                  <span id="loadalert2"></span>
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="pass_confirm">비밀번호확인</label></th>
     		<td>
     			<input type="password" name="pass_confirm" id="pass_confirm"  required>
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="name">이름</label></th>
     		<td>
     			<input type="text" name="name" id="name" onkeyup="check_input4()"  required>
                 <span id="loadalert3"></span>
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="nick">닉네임</label></th>
     		<td>
     			 <input type="text" name="nick" id="nick" onkeyup="check_inputex()"  required>
			     <span id="loadtext2"></span><span id="loadalertex"></span>
     		</td>
     	</tr>
     	<tr>
     		<th scope="col">휴대폰</th>
     		<td>
     			<label class="hidden" for="hp1">전화번호앞3자리</label>
     			<select class="hp" name="hp1" id="hp1"> 
              <option value='010'>010</option>
              <option value='011'>011</option>
              <option value='016'>016</option>
              <option value='017'>017</option>
              <option value='018'>018</option>
              <option value='019'>019</option>
          </select>  - 
          <label class="hidden" for="hp2">전화번호중간4자리</label><input type="text" class="hp" name="hp2" id="hp2" onkeyup="check_input5()"  required> - <label class="hidden" for="hp3">전화번호끝4자리</label><input type="text" class="hp" name="hp3" id="hp3" onkeyup="check_input6()"  required>
     			
     		</td>
     	</tr>
     	<tr>
     		<th scope="col">이메일</th>
     		<td>
     		  <label class="hidden" for="email1">이메일아이디</label>
     			<input type="text" id="email1" name="email1"  required> @ 
     			<label class="hidden" for="email2">이메일주소</label>
     			<input type="text" name="email2" id="email2" onchange="check_input7()"  required>
                 <span id="loadalert4"></span>
     		</td>
     	</tr>
     	<tr>
     		<td colspan="2">
     			<a href="#" onclick="check_input()">저장하기</a>&nbsp;&nbsp;
				 <a href="#" onclick="reset_form()">취소하기</a>
     		</td>
     	</tr>
     </table>

	 </form>
	  
	</article>

</body>
</html>


