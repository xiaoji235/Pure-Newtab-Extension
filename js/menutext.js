function search() {
    var s = $("#s-txt"),
    i = $("#box"),
    t = ($("#box ul li"), $(".search-icon"));
    t.css("opacity", "1");
    var e, n = -1,
    a = 0,
    o = {
        id: 0,
        name: "百度",
        url: "https://www.baidu.com/s?wd=",
        img: "url('search/baidu.svg')"
    };
    function l(e) {
        return $(e).contents().filter(function(e, t) {
            return 3 === t.nodeType
        }).text().trim()
    }
    function c(t, n) {
        var e;
        if ("https://search.jd.com/Search?keyword=" === o.url ? (e = "https://search.jd.com/Search?keyword=" + t + "&enc=utf-8", e = "https://union-click.jd.com/jdc?type=union&p=JF8BAGoKGloXVAEBVFdYOE8nAl8JKx9KBVhdDxxtUQ5SQmQWBR1TGxlZAUEPVhcnUWwJT1wSDgFWVwpdDUpHAmYPGFkSVQMLVlxbDk5CVjg4RB9IADYBVV5bAU0fAm0KK2sVXDYyZG5tOEonM184&t=W1dCFBBFC0RUQUpADgpQTFs=&e=&tu=#targetUrl".replace("#targetUrl", encodeURIComponent(e)), window.open(e)) : window.open(o.url + t), 1 === n && 0 < cur_max_his) {
            n = localStorage.getItem("searchText");
            let e = [];
            n && (e = JSON.parse(n)),
            e.push(t),
            function(n) {
                for (let t = 0; t < n.length; t++) {
                    var e = n[t].trim();
                    if ("" == e && n.splice(t, 1), "" !== e) for (let e = t + 1; e < n.length; e++) n[t] == n[e] && n.splice(t, 1)
                }
            } (e),
            10 < e.length && e.splice(0, 1),
            localStorage.setItem("searchText", JSON.stringify(e))
        }
    }
    function r(e) {
        $.ajax({
            type: "GET",
            url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
            "async": !0,
            data: {
                wd: e
            },
            dataType: "jsonp",
            jsonp: "cb",
            success: function(t) {
                if ($("#box ul").text(""), a = t.s.length, n = -1, a) {
                    i.css("display", "block");
                    for (let e = 0; e < a; e++) $("#box ul").append("<li><i class='fa fa-search'></i> " + t.s[e] + "</li>"),
                    $("#box ul li").eq(e).click(function() {
                        var e = l(this);
                        s.val(e),
                        c(e, 1),
                        i.css("display", "none")
                    }),
                    0 === e && $("#box ul li").eq(e).css({
                        "border-top": "none"
                    })
                } else i.css("display", "none")
            },
            error: function(e) {
                console.log(e)
            }
        })
    }
    function u() {
        $("#box ul").text("");
        var e = localStorage.getItem("searchText");
        if (e) {
            i.css("display", "block");
            let n = JSON.parse(e);
            n.reverse();
            var a = n.length;
            if (a <= cur_max_his) for (let t = 0; t < a; t++) $("#box ul").append("<li><i class='far fa-clock'></i> " + n[t] + "</li>"),
            $("#box ul li").eq(t).click(function() {
                var e = n[t];
                s.val(e),
                c(e, 0),
                i.css("display", "none")
            });
            else for (let t = 0; t < cur_max_his; t++) $("#box ul").append("<li><i class='far fa-clock'></i> " + n[t] + "</li>"),
            $("#box ul li").eq(t).click(function() {
                var e = n[t];
                s.val(e),
                c(e, 0),
                i.css("display", "none")
            });
            a <= 0 ? i.css("display", "none") : ($("#box ul").append("<div class='space-tips'><span class='offHistory'>清空历史</span></div>"), $(".offHistory").click(function() {
                localStorage.removeItem("searchText")
            }))
        } else i.css("display", "none")
    }
    0 < localStorage.length && (null != (e = JSON.parse(localStorage.getItem("pcEngine"))) && (o.id = e.id, o.name = e.name, o.url = e.url, o.img = e.img, t.css("background-image", o.img)), e = localStorage.getItem("maxHis"), cur_max_his = null != e ? Number(e) : 10),
    s.keydown(function(e) {
        var t;
        $("#search").css("opacity") < 1 && $("#search").css("opacity", 1),
        40 === e.keyCode && (n === a - 1 ? n = 0 : n++, $("#box ul li").eq(n).addClass("current").siblings().removeClass("current"), t = l($("#box ul li").eq(n)), s.val(t)),
        38 === e.keyCode && (e.preventDefault && e.preventDefault(), e.returnValue && (e.returnValue = !1), 0 === n || -1 === n ? n = a - 1 : n--, $("#box ul li").eq(n).addClass("current").siblings().removeClass("current"), t = l($("#box ul li").eq(n)), s.val(t)),
        13 === e.keyCode && ((e = s.val()) ? (c(e, 1), $("#box ul").html("")) : s.focus())
    }),
    s.mouseup(function() {
        "s-txt" == document.activeElement.id && (s.val() ? r(s.val()) : u())
    }),
    s.keyup(function(e) {
        "s-txt" == document.activeElement.id && (s.val() ? 38 !== e.keyCode && 40 !== e.keyCode && r($(this).val()) : u())
    }),
    s.blur(function() {
        setTimeout(function() {
            i.css("display", "none")
        },
        250)
    });
    for (let e = 0; e < searchEngines.length; e++) $(".search-engine-list").append('<li><span style="background-image:' + searchEngines[e].img + '"/></span>' + searchEngines[e].name + "</li>");
    t.click(function(e) {
        $(".search-engine").toggle(),
        e.stopPropagation()
    }),
    $(document).click(function() {
        $(".search-engine").hide()
    }),
    $(".search-engine-list li").click(function() {
        var e = $(this).index();
        o.id = searchEngines[e].id,
        o.name = searchEngines[e].name,
        o.url = searchEngines[e].url,
        o.img = searchEngines[e].img,
        t.css("background-image", o.img),
        $(".search-engine").css("display", "none"),
        localStorage.pcEngine = JSON.stringify(o)
    }),
    t.css("background-image", o.img),
    $("#search-btn").click(function() {
        var e = s.val();
        e ? (c(e, 1), $("#box ul").html("")) : s.focus()
    })
}
window.setDragImageIEPreload = function(e) {
    var t = document.body,
    n = document.createElement("div");
    n.style.background = 'url("' + e.src + '")',
    n.style.position = "absolute",
    n.style.opacity = .001,
    t.appendChild(n),
    setTimeout(function() {
        t.removeChild(n)
    },
    5e3)
},
"function" != typeof DataTransfer.prototype.setDragImage && (DataTransfer.prototype.setDragImage = function(e, t, n) {
    var a, s, i, o = "setdragimage-ie-dragging-" + Math.round(Math.random() * Math.pow(10, 5)) + "-" + Date.now(),
    e = ["." + o, "{", 'background: url("' + e.src + '") no-repeat #fff 0 0 !important;', "width: " + e.width + "px !important;", "height: " + e.height + "px !important;", "text-indent: -9999px !important;", "border: 0 !important;", "outline: 0 !important;", "}", "." + o + " * {", "display: none !important;", "}"],
    l = document.createElement("style");
    for (l.innerText = e.join(""), (a = document.getElementsByTagName("head")[0]).appendChild(l), s = DataTransfer.prototype.setDragImage.caller; ! (s.arguments[0] instanceof DragEvent);) s = s.caller; (i = s.arguments[0].target).classList.add(o),
    setTimeout(function() {
        a.removeChild(l),
        i.classList.remove(o)
    },
    0)
}),
document.addEventListener("DOMContentLoaded", search);