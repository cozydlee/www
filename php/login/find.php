<?
   session_start();
?>
    <meta charset="UTF-8">
<?
  @extract($_GET); 
  @extract($_POST); 
  @extract($_SESSION); 

   if(!$name) {
     echo("
           <script>
             window.alert('이름을 입력하세요');
             history.go(-1);
           </script>
         ");
         exit;
   }

   if(!($hp2 && $hp3)) {
     echo("
           <script>
             window.alert('연락처를 입력하세요');
             history.go(-1);
           </script>
         ");
         exit;
   }


   include "../lib/dbconn.php";

   $sql = "select * from member where name='$name'"; 
   $result = mysql_query($sql, $connect);

   $num_match = mysql_num_rows($result); 

   if(!$num_match)
   {
     echo(" 
           <script>
             window.alert('등록되지 않은 이름 입니다');
             history.go(-1);
           </script>
         ");
    }
    else 
    {
         $hp = $hp1."-".$hp2."-".$hp3; 
        
		     $row = mysql_fetch_array($result); 
         $sql ="select * from member where name='$name' and hp='$hp'";
         $result = mysql_query($sql, $connect);
         $num_match = mysql_num_rows($result); 

        if(!$num_match)
        {
           echo("
              <script>
                window.alert('등록된 정보가 없습니다');
                history.go(-1);
              </script>
           ");

           exit;
        }
        else 
        {
           $id = $row[id];
           $name = $row[name];
           $hp = $row[hp];
           $date = $row[regist_day];
            

           echo
           "<strong>[ 가입정보 ]</strong><br>
           아이디 : $id <br>
           이름 : $name <br>
           연락처: $hp <br>
           가입일자 : $date "
           

           ;
        }
   }          
?>
