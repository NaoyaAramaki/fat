// 作成者：荒牧直矢
// 作成日：2022/09/29
// 最終更新日：2022/09/29

$(function(){
    var dir = -1;
    var interval = 3000;
    var duration = 700;
    var timer;

    $(".main_visual ul").prepend($(".main_visual li:last-of-type"));
    $(".main_visual ul").css("left", -600);

    timer = setInterval(slideTimer, interval);

    function slideTimer() {
        if(dir == -1) {
            $(".main_visual ul").animate({"left" : "-=600px"}, duration,
            function(){
                $(this).append($(".main_visual li:first-of-type"));
                $(this).css("left", -600);
            })
        } else {
            $(".main_visual ul").animate({"left" : "+=600px"}, duration,
            function(){
                $(this).prepend($(".main_visual li:last-of-type"));
                $(this).css("left", -600);
                dir = -1;
            })
        }
    }

    $("#prevBtn").click(function(){
        dir = 1;
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
    });

    $("#nextBtn").click(function(){
        dir = -1;
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
    })
});