<? 
	session_start();

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
	
	include "../lib/dbconn.php";

	if ($mode=="modify")
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);

		$row = mysql_fetch_array($result);       
	
		$item_subject     = $row[subject];
		$item_content     = $row[content];

		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];
		$item_file_3 = $row[file_name_3];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
		$copied_file_3 = $row[file_copied_3];

		$item_category = $row[category];
	}
?>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="../../common/css/common.css" rel="stylesheet" type="text/css" media="all">
	<link href="css/concert.css" rel="stylesheet" type="text/css" media="all">
	<link href="../../sub6/common/css/sub6common.css" rel="stylesheet" type="text/css" media="all">
    <title>소통공간-생태도감</title>
    <link rel="shortcut icon" type="image/x-icon" href="../../favicon.ico">
    <script src="../../common/js/prefixfree.min.js"></script>
    <script src="https://kit.fontawesome.com/43cec56aae.js" crossorigin="anonymous"></script>
	<script>
  function check_input()
   {
      if (!document.board_form.subject.value)
      {
          alert("제목을 입력하세요!");    
          document.board_form.subject.focus();
          return;
      }

      if (!document.board_form.content.value)
      {
          alert("내용을 입력하세요!");    
          document.board_form.content.focus();
          return;
      }
      document.board_form.submit();
   }
</script>
</head>


<body>
<? include "../../common/php_header.html" ?>
<div class="main">
            <h3>소통공간</h3>
        </div>

        <div class="subNav">
            <ul>
                <li><a href="../../php/greet/list.php">공지사항</a></li>
                <li><a href="../../sub6/sub6_2.html">뉴스레터</a></li>
                <li><a class="current" href="#">생태도감</a></li>
                <li><a href="../../sub6/sub6_4.html">질의응답</a></li>
            </ul>
        </div>

        <article id="content">
            <div class="titleArea">
                <div class="lineMap">
                    <i class="fa-solid fa-house"></i> &gt; <span>한국조류보호협회</span> &gt;
                    <span>소통공간</span> &gt; <strong>생태도감</strong>
                </div>
                <h2>생태도감</h2>
            </div>
            <div class="contentArea">
		<div class="clear"></div>

		<div class="clear"></div>

<?
	if($mode=="modify")
	{

?>
		<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>&scale=<?=$scale?>" enctype="multipart/form-data"> 
<?
	}
	else
	{
?>
		<form  name="board_form" method="post" action="insert.php?table=<?=$table?>&scale=<?=$scale?>" enctype="multipart/form-data"> 
<?
	}
?>
		<div id="write_form">
		<div class="write_line"></div>
			<div id="write_row8"><div class="col1"> 카테고리 </div><div class="col2">
			<select id="category" name="category">
						<option value='야생조류'>야생조류</option>
						<option value='야생수류'>야생수류</option>
			</select>
		</div>

		<div class="write_line"></div>
			<div id="write_row1"><div class="col1"> 닉네임 </div><div class="col2"><?=$usernick?></div>
<?
	if( $userid && ($mode != "modify") )
	{
?>
				<div class="col3"><input type="checkbox" name="html_ok" value="y"> HTML 쓰기</div>
<?
	}
?>						
			</div>
			<div class="write_line"></div>
			<div id="write_row2"><div class="col1"> 제목   </div>
			                     <div class="col2"><input type="text" name="subject" value="<?=$item_subject?>" ></div>
			</div>
			<div class="write_line"></div>
			<div id="write_row3"><div class="col1"> 내용   </div>
			                     <div class="col2"><textarea rows="15" cols="79" name="content"><?=$item_content?></textarea></div>
			</div>
			<div class="write_line"></div>
			<div id="write_row4"><div class="col1"> 이미지파일1   </div>
			                     <div class="col2"><input type="file" name="upfile[]"></div>
			</div>
			<div class="clear"></div>
<? 	if ($mode=="modify" && $item_file_0)
	{
?>
			<div class="delete_ok"><?=$item_file_0?> 파일이 등록되어 있습니다. <input type="checkbox" name="del_file[]" value="0"> 삭제</div>
			<div class="clear"></div>
<?
	}
?>
			<div class="write_line"></div>
			<div id="write_row5"><div class="col1"> 이미지파일2  </div>
			                     <div class="col2"><input type="file" name="upfile[]"></div>
			</div>
<? 	if ($mode=="modify" && $item_file_1)
	{
?>
			<div class="delete_ok"><?=$item_file_1?> 파일이 등록되어 있습니다. <input type="checkbox" name="del_file[]" value="1"> 삭제</div>
			<div class="clear"></div>
<?
	}
?>
			<div class="write_line"></div>
			<div class="clear"></div>
			<div id="write_row6"><div class="col1"> 이미지파일3   </div>
			                     <div class="col2"><input type="file" name="upfile[]"></div>
			</div>
<? 	if ($mode=="modify" && $item_file_2)
	{
?>
			<div class="delete_ok"><?=$item_file_2?> 파일이 등록되어 있습니다. <input type="checkbox" name="del_file[]" value="2"> 삭제</div>
			<div class="clear"></div>
<?
	}
?>
			<div class="write_line"></div>
			<div class="clear"></div>
			<div id="write_row7"><div class="col1"> 이미지파일4   </div>
			                     <div class="col2"><input type="file" name="upfile[]"></div>
			</div>
<? 	if ($mode=="modify" && $item_file_3)
	{
?>
			<div class="delete_ok"><?=$item_file_3?> 파일이 등록되어 있습니다. <input type="checkbox" name="del_file[]" value="3"> 삭제</div>
			<div class="clear"></div>
<?
	}
?>
			<div class="write_line"></div>

			<div class="clear"></div>
		</div>

		<div id="write_button"><a href="#" onclick="check_input()">작성완료</a>&nbsp;
								<a href="list.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale ?>&mode2=<?=$mode2?>">목록</a>
		</div>

		</form>
		</div>
</article>

		<? include "../../common/php_footer.html" ?>

</body>
</html>
