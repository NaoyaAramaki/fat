// 作成者：荒牧直矢
// 作成日：2022/09/29
// 最終更新日：2022/09/29

$(function(){
    var windowWidth = window.innerWidth;
    const breakPointA = 600;
    const breakPointB = 1000;
    var isMobileSize = windowWidth < breakPointA;
    var isTabletSize = windowWidth <= breakPointB && windowWidth > breakPointA;
    var isPcSize = windowWidth > breakPointB;
    var dir = -1;
    var interval = 2000;
    var duration = 700;
    var timer;
    timer = setInterval(slideTimer, interval);


    $(".main_visual ul").prepend($(".main_visual li:last-of-type"));

    if(isMobileSize) {
        $(".main_visual ul").css("left", -300);
    } else if(isTabletSize) {
        $(".main_visual ul").css("left", -450);
    } else if(isPcSize) {
        $(".main_visual ul").css("left", -600);
    }

    function slideTimer() {
        if(dir == -1) {
            if(isMobileSize) {
                $(".main_visual ul").animate({"left" : "-=300px"}, duration,
                function(){
                    $(this).append($(".main_visual li:first-of-type"));
                    $(this).css("left", -300);
                })
            } else if(isTabletSize) {
                $(".main_visual ul").animate({"left" : "-=450px"}, duration,
                function(){
                    $(this).append($(".main_visual li:first-of-type"));
                    $(this).css("left", -450);
                })
            } else if(isPcSize) {
                $(".main_visual ul").animate({"left" : "-=600px"}, duration,
                function(){
                    $(this).append($(".main_visual li:first-of-type"));
                    $(this).css("left", -600);
                })
            }
        } else {
            if(isMobileSize) {
                $(".main_visual ul").animate({"left" : "+=300px"}, duration,
                function(){
                    $(this).prepend($(".main_visual li:last-of-type"));
                    $(this).css("left", -300);
                })
            } else if(isTabletSize) {
                $(".main_visual ul").animate({"left" : "+=450px"}, duration,
                function(){
                    $(this).prepend($(".main_visual li:last-of-type"));
                    $(this).css("left", -450);
                })
            } else if(isPcSize) {
                $(".main_visual ul").animate({"left" : "+=600px"}, duration,
                function(){
                    $(this).prepend($(".main_visual li:last-of-type"));
                    $(this).css("left", -600);
                })
            }          
            dir = -1;
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