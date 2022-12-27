function check_inputex(){
   tvalueex = document.member_form.nick;
   onvalueex = tvalueex.value;
   
   count=0;

   if(onvalueex.length > 5) {
      $('#loadalertex').css({display:"inline"})
     $('#loadalertex').html(`<span style='color:red'>닉네임은 5자리 이하로 입력해주시기 바랍니다. </span>`) ;
     $('#loadtext2').css({display:"none"})
     tvalueex.value = "";
     tvalueex.focus();
   }else{
      $('#loadalertex').css({display:"none"})
      $('#loadtext2').css({display:"inline"})
   }
  }

function check_input2(){
 tvalue = document.member_form.id;
 onvalue = tvalue.value;
 
 count=0;
 for (i=0;i<onvalue.length;i++){
   char = onvalue.charAt(i);

   if(char.search(/[0-9|a-z|A-Z]/) == -1) {
      count++;
   }
 }
 if(count!=0) {
    $('#loadalert').css({display:"inline"})
   $('#loadalert').html(`<span style='color:red'>아이디는 숫자, 영문 대소문자만 사용 가능 다시입력하세요. </span>`) ;
   $('#loadtext').css({display:"none"})
   tvalue.focus();
 }else{
    $('#loadalert').css({display:"none"})
    $('#loadtext').css({display:"inline"})
 }

 if(onvalue.length > 8) {
   $('#loadalert').css({display:"inline"})
  $('#loadalert').html(`<span style='color:red'>아이디는 8자리 이하로 입력해주시기 바랍니다. </span>`) ;
  $('#loadtext').css({display:"none"})
  tvalue.value = "";
  tvalue.focus();
}else{
   $('#loadalert').css({display:"none"})
   $('#loadtext').css({display:"inline"})
}
}

function check_input3(){
 tvalue2 = document.member_form.pass;
 onvalue2 = tvalue2.value;
 
 count2=0;
 for (i=0;i<onvalue2.length;i++){
   char2 = onvalue2.charAt(i);

   if(char2.search(/[0-9|a-z|A-Z]/) == -1) {
      count2++;
   }
 }
 if(count2!=0) {
    $('#loadalert2').css({display:"inline"})
   $('#loadalert2').html(`<span style='color:red'>비밀번호는 숫자, 영문 대소문자만 사용 가능 다시입력하세요. </span>`) ;
   tvalue2.focus();
 }else{
    $('#loadalert2').css({display:"none"})
 }
}

function check_input4(){
    tvalue3 = document.member_form.name;
    onvalue3 = tvalue3.value;
    
    count3=0;
    for (i=0;i<onvalue3.length;i++){
      char3 = onvalue3.charAt(i);
   
      if(char3.search(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힝]/) == -1) {
         count3++;
      }
    }
    if(count3!=0) {
       $('#loadalert3').css({display:"inline"})
      $('#loadalert3').html(`<span style='color:red'>이름은 한글만 사용 가능 다시입력하세요. </span>`) ;
      tvalue3.focus();
    }else{
       $('#loadalert3').css({display:"none"})
    }
   }

   function check_input5(){
    tvalue4 = document.member_form.hp2;
    onvalue4 = tvalue4.value;
    
    count4=0;
    for (i=0;i<onvalue4.length;i++){
      char4 = onvalue4.charAt(i);
   
      if(char4.search(/[0-9]/) == -1) {
         count4++;
      }
    }
    if(count4!=0) {
      tvalue4.value = "";
      tvalue4.focus();
    }
   }

   function check_input6(){
    tvalue5 = document.member_form.hp3;
    onvalue5 = tvalue5.value;
    
    count5=0;
    for (i=0;i<onvalue5.length;i++){
      char5 = onvalue5.charAt(i);
   
      if(char5.search(/[0-9]/) == -1) {
         count5++;
      }
    }
    if(count5!=0) {
      tvalue5.value = "";
      tvalue5.focus();
    }
   }

 function check_input7()
   {
     var emailID = document.member_form.email2.value;
     var dotpos = emailID.lastIndexOf(".");

     if (dotpos < 3) 
   {
      $('#loadalert4').show();
      $('#loadalert4').html(`<span style='color:red'>이메일 양식에 맞게 작성해 주시기 바랍니다.</span>`) ;
       document.member_form.email2.value = "";
       document.member_form.email2.focus() ; 
       return;
   }else{
      $('#loadalert4').hide();
   }
   }
