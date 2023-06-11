        (function (window) {
            var $ = (sel => document.querySelector(sel));
	setInterval(function() {
	$('.backg').style.opacity = '1';
            }, 500);

                setInterval(function() {
                    $('.weather').style.opacity = '1';
	    $('.drawers').style.opacity = '1';
	    $('.drawers').style.visibility = 'unset';
	    $('.foot').style.opacity = '1';
	    $('.time').style.opacity = '1';
	    $('.yiyan').style.opacity = '1';
            }, 1500);
        })(window)

