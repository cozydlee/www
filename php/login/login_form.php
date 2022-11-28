<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="../../common/css/common.css">
    <link rel="stylesheet" href="css/login.css">
    <script src="https://kit.fontawesome.com/f8a0f5a24e.js" crossorigin="anonymous"></script>
</head>
<body>
<header>
<h1><a class="logo" href="../../index.html">한국조류보호협회</a> </h1>
</header>    
    
<form  name="member_form" method="post" action="login.php"> 
    <h2>로그인</h2>

    <div id="id_pw_input">
        <ul>
            <li><span>아이디:</span><input type="text" name="id" class="login_input" placeholder="아이디를 입력해주세요" required></li>
            <li><span>비밀번호:</span><input type="password" name="pass" class="login_input" placeholder="비밀번호를 입력해주세요" required></li>
        </ul>						
	</div>
    <div id="login_button">
		<button type="submit">로그인</button>
        <i class="fas fa-lock"></i><span>보안접속</span>
	</div>
    <div id="join_button">
        <a href="../member/join.html">회원가입</a>
    </div>

    <ul>
        <li>
            <span><a href="id_find.php">아이디 찾기</a></span>
            <span><a href="pw_find.php">비밀번호 찾기</a></span>
        </li>
	</ul>

</form>

</body>
</html>