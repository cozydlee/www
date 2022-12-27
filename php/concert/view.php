<? 
	session_start(); 

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$image_name[0]   = $row[file_name_0];
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];
	$image_name[3]   = $row[file_name_3];


	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];
	$image_copied[3] = $row[file_copied_3];

    $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}
	
	for ($i=0; $i<4; $i++)
	{
		if ($image_copied[$i])
		{
			$imageinfo = GetImageSize("./data/".$image_copied[$i]);

			$image_width[$i] = $imageinfo[0]; 
			$image_height[$i] = $imageinfo[1]; 
			$image_type[$i]  = $imageinfo[2];   

			$image_width[$i] = 500;
			$image_height[$i] = 600;

		}
		else 
		{
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}

	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";
	mysql_query($sql, $connect);
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
    function del(href) 
    {
        if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href;
        }
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

		<div id="view_comment"> &nbsp;</div>

		<div id="view_title">
			<div id="view_title1"><?= $item_subject ?></div><div id="view_title2"><?= $item_nick ?> | 조회 : <?= $item_hit ?>  
			                      | <?= $item_date ?> </div>	
		</div>

		<div id="view_content">
		<div id="content_img">
	<?
		for ($i=0; $i<4; $i++)
		{
			if ($image_copied[$i])
			{
				$img_name = $image_copied[$i];
				$img_name = "./data/".$img_name; 
				$img_width = $image_width[$i];
				$img_height = $image_height[$i];
				
				echo "<img src='$img_name' width='$img_width' height='$img_height'>";
			}
		}
	?>
		</div>
			<?= $item_content ?>
		</div>

		<div id="view_button">
				<a href="list.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>&mode2=<?=$mode2?>">목록</a>&nbsp;
<? 
	if($userid==$item_id || $userid=="admin" || $userlevel==1 )
	{
?>
				<a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>">수정</a>&nbsp;
				<a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>')">삭제</a>&nbsp;
<?
	}
?>
<? 
	if($userid)
	{
?>
				<a href="write_form.php?table=<?=$table?>&scale=<?=$scale?>">작성</a>
<?
	}
?>
		</div>

		<div class="clear"></div>
		</div>
</article>

		<? include "../../common/php_footer.html" ?>
</body>
</html>
