<? 
	session_start(); 
?>
<!DOCTYPE HTML>
<html lang="ko">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="../../common/css/common.css" rel="stylesheet" type="text/css" media="all">
	<link href="css/greet.css" rel="stylesheet" type="text/css" media="all">
	<link href="../../sub6/common/css/sub6common.css" rel="stylesheet" type="text/css" media="all">
    <title>소통공간-공지사항</title>
    <link rel="shortcut icon" type="image/x-icon" href="../../favicon.ico">
    <script src="../../common/js/prefixfree.min.js"></script>
    <script src="https://kit.fontawesome.com/43cec56aae.js" crossorigin="anonymous"></script>
</head>
<?

   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);

	include "../lib/dbconn.php";

	if(!$scale)
	$scale=10;			// 한 화면에 표시되는 글 수

	//1. 다 보이는 것 하나 2. 페이지네이션 클릭했을 때 보이는 것 하나 3. 검색을 통해 보이는 것(mode=search)
	
    if ($mode=="search")
	{
		if(!$search)
		{
			echo("
				<script>
				 window.alert('검색할 단어를 입력해 주세요!');
			     history.go(-1);
				</script>
			");
			exit;
		}

		$sql = "select * from greet where $find like '%$search%' order by num desc"; //최신글이 맨 위에 있기 때문에(내림차순으로 배열)
	}
	else
	{
		$sql = "select * from greet order by num desc";
	}

	$result = mysql_query($sql, $connect);

	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0)     
		$total_page = floor($total_record/$scale);      
	else
		$total_page = floor($total_record/$scale) + 1; 
 
	if (!$page)                 // 페이지번호($page)가 0 일 때
		$page = 1;              // 페이지 번호를 1로 초기화
 
	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;      

	$number = $total_record - $start;
?>

<body>
	<? include "../../common/php_header.html" ?>
	<div class="main">
            <h3>소통공간</h3>
        </div>

        <div class="subNav">
            <ul>
                <li><a class="current" href="#">공지사항</a></li>
                <li><a href="../../sub6/sub6_2.html">뉴스레터</a></li>
                <li><a href="../../php/concert/list.php">생태도감</a></li>
                <li><a href="../../sub6/sub6_4.html">질의응답</a></li>
            </ul>
        </div>

        <article id="content">
            <div class="titleArea">
                <div class="lineMap">
                    <i class="fa-solid fa-house"></i> &gt; <span>한국조류보호협회</span> &gt;
                    <span>소통공간</span> &gt; <strong>공지사항</strong>
                </div>
                <h2>공지사항</h2>
            </div>
            <div class="contentArea">
				<!-- mode=search는 get방식으로 -->
				<form name="board_form" method="post" action="list.php?mode=search">
					<div id="list_search">
						<div id="list_search1">총
							<?= $total_record ?> 개의 게시물이 있습니다.
						</div>
						<div id="list_search3">
							<select name="find">
								<option value='subject'>제목</option>
								<option value='content'>내용</option>
								<option value='nick'>닉네임</option>
								<option value='name'>이름</option>
							</select>
						</div>
						<div id="list_search4"><input type="text" name="search"></div>
						<!-- 역할은 submit -->
						<div id="list_search5"><input type="image" src="./image/search.svg" alt="검색"></div>
					</div>
				</form>

				<ul class="lst_mode">
							<li class="active"><a href="list.php?listmode=list&scale=<?=$scale?>"><i class="fa-solid fa-list"></i></a></li>
							<li><a href="list.php?listmode=box&scale=<?=$scale?>"><i class="fa-solid fa-table-cells-large"></i></a></li>
				</ul>
				
				<div class="list_count"> 
					<label for="scale" class="hidden">리스트개수</label>
					<select id="scale" name="scale" onchange="location.href='list.php?scale='+this.value+'&listmode=<?=$listmode?>'">
						<option value=''>보기</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</select>
				</div>

				<div class="clear"></div>

				<div id="list_top_title">
					<ul>
						<li id="list_title1">번호</li>
						<li id="list_title2">제목</li>
						<li id="list_title3">글쓴이</li>
						<li id="list_title4">등록일</li>
						<li id="list_title5">조회</li>
					</ul>
					<span id="list_title6">목록</span>
				</div>

				<div id="list_content">
					<?		
   for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
   {
      mysql_data_seek($result, $i);       
      // 가져올 레코드로 위치(포인터) 이동  
      $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	  $item_num     = $row[num];
	  $item_id      = $row[id];
	  $item_name    = $row[name];
  	  $item_nick    = $row[nick];
	  $item_hit     = $row[hit];

      $item_date    = $row[regist_day];
	  $item_date = substr($item_date, 0, 10);  

	  $item_subject = str_replace(" ", "&nbsp;", $row[subject]);

?>
					<div class="list_item">
						<div class="list_item1">
							<?= $number ?>
						</div>
						<div class="list_item2"><a href="view.php?num=<?=$item_num ?>&page=<?=$page ?>&scale=<?=$scale ?>&listmode=<?=$listmode?>">
								<?= $item_subject ?>
							</a></div>
						<div class="list_item3"> <span> 작성자: </span>
							<?= $item_nick ?>
						</div>
						<div class="list_item4"> <span> 작성일: </span>
							<?= $item_date ?> 
						</div>
						<div class="list_item5"> <span> HIT: </span>
							<?= $item_hit ?>
						</div>
					</div>
					<?
   	   $number--;
   }
?>
					<div id="page_button">
						<div id="page_num"> ◀ 이전 &nbsp;&nbsp;&nbsp;&nbsp;
							<?
   // 게시판 목록 하단에 페이지 링크 번호 출력
   for ($i=1; $i<=$total_page; $i++)
   {
		if ($page == $i)     // 현재 페이지 번호 링크 안함
		{
			echo "<b> $i </b>";
		}
		else
		{ 
			echo "<a href='list.php?page=$i&scale=$scale&listmode=$listmode'> $i </a>"; //페이지 번호랑, 스케일도 같이 넘겨줘야함
		}      
   }
?>
							&nbsp;&nbsp;&nbsp;&nbsp;다음 ▶
						</div>
						<div id="button">
							<a href="list.php?page=<?=$page?>&scale=<?=$scale?>&listmode=<?=$listmode?>">목록</a>&nbsp;
							<? 
	if($userid) //세션변수 userid값이 들어오면 로그인 
	{
?>
							<a href="write_form.php?page=<?=$page?>&scale=<?=$scale?>&listmode=<?=$listmode?>">작성</a>
							<?
	}
?>
						</div>
					</div> <!-- end of page_button -->

				</div> <!-- end of list content -->

				<div class="clear"></div>
            </div>
</article>

		
		<? include "../../common/php_footer.html" ?>

		

		<?
		if (!$listmode){
			$listmode = 'list';	// 리스트 스타일
			echo "
				<script>
					$('.lst_mode li').removeClass('active');
					$('.lst_mode li:eq(0)').addClass('active');
				</script>
			";
		} else if($listmode == 'box'){
			$listmode = 'box';	// 리스트 스타일
			echo "
				<script>
					$('.lst_mode li').removeClass('active');
					$('.lst_mode li:eq(1)').addClass('active');
					$('#list_top_title ul').addClass('box');
					$('#list_title6').addClass('box');
					$('#list_content').addClass('box');
					$('#list_content div').addClass('box');
					$('.list_item div').addClass('box');
					$('.list_item div span').addClass('box');
					$('#page_button').addClass('box');
				</script>
			";

		}
	?>
</body>

</html>