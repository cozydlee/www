
<?
   function latest_article($table, $loop, $char_limit, $char_limit2)
   {
		include "dbconn.php";

		$sql = "select * from $table order by num desc limit $loop";  
		$result = mysql_query($sql, $connect);

		while ($row = mysql_fetch_array($result))
		{
			$num = $row[num]; 
			$len_subject = strlen($row[subject]);
			$subject = $row[subject];
			$content = $row[content]; 
			$len_content = strlen($row[content]);

			if ($len_subject > $char_limit)
			{
				$subject = mb_substr($row[subject], 0, $char_limit, 'utf-8');

				$subject = $subject."...";
			}

			$regist_day = substr($row[regist_day], 0, 10);

			if($len_content > $char_limit2){
				$content  = mb_substr($row[content], 0, $char_limit2, 'utf-8'); 

				$content  = $content."..."; 
			}

			if($table=='concert'){
				$file_copied_0 = $row[$file_copied_0];
				if($file_copied_0){
					echo "
					<img class='cimg' src='./$table/data/$file_copied_0'>
				";

				}else{
					echo "
					<img class='cimg' src='./$table/data/default.jpg'>
				";
				}

			}

			echo "
				<div>
					<a href='./php/$table/view.php?table=$table&num=$num&page=1&scale=10&listmode='>
					<dl class='col1'>
						<dt>$subject</dt>
						<dd>$content
							<span>$regist_day</span>
						</dd>
					</dl>
					</a>
				</div>
			";
		}
		mysql_close();  
   }
?>
