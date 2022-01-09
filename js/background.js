/*感谢yanji的技术支持 
improved by yanji. url:https://simsoft.top, welcome to vsit.*/

backurl=localStorage.getItem("backurl")


if(backurl){
	document.getElementsByTagName("bg")[0].style="background-image: url("+backurl+");"
}else{
	document.getElementsByTagName("bg")[0].style="background-image: url(image/bg.png);"
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("open-set").addEventListener("click", openset);
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("save-backimg").addEventListener("click", savebackimg);
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("save-backimg64").addEventListener("click", savebackimg64);
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("local-bg").addEventListener("click", localbg);
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("close-set").addEventListener("click", closeset);
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("close-localbg").addEventListener("click", closelocalbg);
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

function savebackimg64(){
	document.getElementById("settingpage").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("settingpage64").style="display:none"},200)
	localStorage.setItem("backurl",document.getElementById("conte").value)
	alert("保存成功！")
	window.location.reload()
}

function localbg(){
	document.getElementById("settingpage2").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("settingpage2").style="display:block;opacity:1"},100)
}

function closeset(){
	document.getElementById("settingpage").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("settingpage").style="display:none"},100)
	document.getElementById("setbg").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("setbg").style="display:none;opacity:0"},100)
}

function closelocalbg(){
	document.getElementById("settingpage2").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("settingpage2").style="display:none"},100)
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("start").addEventListener("click", yulan);
});
function yulan(){
	document.getElementById("imgShow").style="opacity:1"
}
