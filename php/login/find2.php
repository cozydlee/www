<?
   session_start();
?>
    <meta charset="UTF-8">
<?
  @extract($_GET); 
  @extract($_POST); 
  @extract($_SESSION); 

   if(!$id) {
     echo("
           <script>
             window.alert('아이디를 입력하세요');
             history.go(-1);
           </script>
         ");
         exit;
   }

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

   $sql = "select * from member where id='$id'";
   $result = mysql_query($sql, $connect);

   $num_match = mysql_num_rows($result);  

   if(!$num_match) 
   {
     echo(" 
           <script>
             window.alert('등록되지 않은 아이디 입니다');
             history.go(-1);
           </script>
         ");
    }
    else
    {
         $hp = $hp1."-".$hp2."-".$hp3;
        
		     $row = mysql_fetch_array($result); 
         $sql ="select * from member where id='$id' and name='$name' and hp='$hp'";
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
           $userid = $row[id];
           $username = $row[name];
           $userhp = $row[hp];
           $date = $row[regist_day];

        function generateRandomPassword($length=8, $strength=0) {
            $vowels = 'aeuy';
            $consonants = 'bdghjmnpqrstvz';  
            if ($strength & 1) {
                $consonants .= 'BDGHJLMNPQRSTVWXZ0123456789';  
            }

            $password = '';
            $alt = 0;
            for ($i = 0; $i < $length; $i++) {
                if ($alt == 1) {
                    $password .= $consonants[(rand() % strlen($consonants))];
                    $alt = 0;
                } else {
                    $password .= $vowels[(rand() % strlen($vowels))];
                    $alt = 1;
                }
            }
            
            return $password;
        }

        $ranpass = generateRandomPassword(8,1); 
            
        echo " <strong>[ 가입정보 ]</strong><br>
           임시비밀번호는 <strong> $ranpass </strong> 입니다<br>
           아이디 : $userid <br>
           이름 : $username <br>
           연락처: $userhp <br>
           가입일자 : $date <br>
           <strong>* 로그인 후 비밀번호를 변경해주세요.</strong>";
            
        $sql = "update member set pass=password('$ranpass') where id='$id' and name='$name' and hp='$hp'";
        $result = mysql_query($sql, $connect);
        }
        
        
   }          
?>
