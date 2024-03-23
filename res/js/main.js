
let backimg=$("#backimg");
$(backimg).attr('placeholder', "请输入完整URL，以https://开头")
backimg.focus(function(){
  $(this).css("background-color","#FFFFCC");
  $(this).attr('placeholder', "")
});
backimg.blur(function(){
  $(this).css("background-color","#D6D6FF");
  if($(this).val() == ""){
    $(backimg).attr('placeholder', "请输入完整URL，以https://开头")
  }
});



let clear=$("#clear-set");
clear.on("click", function f (a) {
  // localStorage.clear();
  console.log("clear");
  
  var x;
  var r=confirm();
  if (r==true){
    $.toast({
      heading: '清除成功',
      // text: '需要显示的文本',
      icon: 'error',
      showHideTransition: 'slide',
      hideAfter: 2000,
      allowToastClose: false,
    });
  }
  else{
    x="你按下了\"取消\"按钮!";
  }
  // alert(x);
  
  

  
});



