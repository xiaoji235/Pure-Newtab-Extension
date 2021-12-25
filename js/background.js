/*感谢yanji的技术支持 
improved by yanji. url:https://simsoft.top, welcome to vsit.*/

backurl=localStorage.getItem("backurl")


if(backurl){
	document.getElementsByTagName("bg")[0].style="background-image: url("+backurl+");"
}else{
	document.getElementsByTagName("bg")[0].style="background-image: url(images/bg.png);"
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("open-set").addEventListener("click", openset);
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("save-backimg").addEventListener("click", savebackimg);
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("close-set").addEventListener("click", closeset);
});

function openset(){
	document.getElementById("settingpage").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("settingpage").style="display:block;opacity:1"},100)
	document.getElementById("setbg").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("setbg").style="display:block;opacity:1"},100)
}

function savebackimg(){
	document.getElementById("settingpage").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("settingpage").style="display:none"},200)
	localStorage.setItem("backurl",document.getElementById("backimg").value)
	alert("保存成功！")
	window.location.reload()
}

function closeset(){
	document.getElementById("settingpage").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("settingpage").style="display:none"},100)
	document.getElementById("setbg").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("setbg").style="display:none;opacity:0"},100)
}
