        (function (window) {
            var $ = (sel => document.querySelector(sel));
			setInterval(function() {
				$('.backg').style.opacity = '1';
            }, 500);
            setInterval(function() {
                $('.popup').style.opacity = '1';
				$('.CommonSite').style.opacity = '1';
				$('.foot').style.opacity = '1';
				$('.time').style.opacity = '1';
				$('.yiyan').style.opacity = '1';
            }, 1500);
        })(window)