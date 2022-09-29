// 作成者：荒牧直矢
// 作成日：2022/09/29
// 最終更新日：2022/09/29

$(function(){
    var count = $("div.flex > ul li").length;
    var current = 1;
    var next = 2;
    var interval = 2000;
    var duration = 500;
    var timer;

    $("div.flex > ul li:not(:first-of-type)").hide();
    timer = setInterval(slideTimer, interval);

    function slideTimer() {
        $("div.flex > ul li:nth-of-type(" + current + ")").fadeOut(duration);
        $("div.flex > ul li:nth-of-type(" + next + ")").fadeIn(duration);
        current = next;
        next = ++next;

        if(next > count) {
            next = 1;
        }
    }

    $(".right ul.flex li a").click(function(){
        next = $(this).children().attr("id");
        
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);

        slideTimer();

        return false;
    })
})