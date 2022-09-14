window.onload = function () {
    var oDt = new Date();
    var sWd = "";
    var iWeekDay = oDt.getDay();
    switch (iWeekDay) {
        case 0:
            sWd = "星期日";
            break;
        case 1:
            sWd = "星期一";
            break;
        case 2:
            sWd = "星期二";
            break;
        case 3:
            sWd = "星期三";
            break;
        case 4:
            sWd = "星期四";
            break;
        case 5:
            sWd = "星期五";
            break;
        case 6:
            sWd = "星期六";
            break;
    }
    var iMonth = parseInt(oDt.getMonth()) + 1;
    document.getElementById("displaydate").innerHTML = "<span>" + oDt.getFullYear() + "年" + iMonth + "月" + oDt.getDate() + "日 " + sWd + "</span>";
    var iTimerid = window.setInterval("showtime()", 1000);

    if (document.getElementById("a1") != null) {
        document.getElementById("a1").onmouseover = function () {
            document.getElementById("badimg").src = "img/广告/1.png";
        }
    }
    if (document.getElementById("a2") != null) {
        document.getElementById("a2").onmouseover = function () {
            document.getElementById("badimg").src = "img/广告/2.png";
        }
    }
    if (document.getElementById("a3") != null) {
        document.getElementById("a3").onmouseover = function () {
            document.getElementById("badimg").src = "img/广告/3.png";
        }
    }

}