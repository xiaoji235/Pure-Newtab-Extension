(function(a) {
	a(document).on("ready", function() {
        var h = 23;
        var g = h / a(document).height();
        var i = h / a(document).width();
        a("body").on("mousemove", function(j) {
            var n = j.pageX - (a(document).width() / 200),
                o = j.pageY - (a(document).height() / 200),
                l = i * n * -1,
                m = g * o * -1,
                k = a(".lm-animated-bg");
            k.css({
                "background-position": "calc( 50% + " + l + "px ) calc( 50% + " + m + "px )",
            });
        });
    })
})(jQuery);