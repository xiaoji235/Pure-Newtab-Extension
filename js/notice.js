/**公告**/


/*notice1*/
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("open-notice").addEventListener("click", opennotice);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("setbg").addEventListener("click", closenotice);
});

/*notice2*/
function opennotice(){
	document.getElementById("notice").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("notice").style="display:block;opacity:1"},100)
	document.getElementById("setbg").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("setbg").style="display:block;opacity:1"},100)
}

function closenotice(){
	document.getElementById("notice").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("notice").style="display:none"},200)
	document.getElementById("setbg").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("setbg").style="display:none;opacity:0"},100)
}