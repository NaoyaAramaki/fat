// 作成者：荒牧直矢
// 作成日：2022/10/02
// 最終更新日：2022/10/15
$(function(){
    var dir = -1;
    var interval = 3000;
    var duration = 700;
    var timer;
    var list01 = ".list01";
    var list02 = ".list02";
    var firstList =  " li:first-of-type";
    timer = setInterval(slideTimer, interval);

    function slideTimer() {
        slideItem(list01, (list01+firstList));
        slideItem(list02, (list02+firstList));
    }
    function slideItem(list, firstList) {
        $(list).animate({"top": "-=110px"}, duration,
        function(){
            $(this).append($(firstList));
            $(this).css("top", -110);
        });
    }


    var firstSection = " section:first-of-type";
    var lastSection = " section:last-of-type";
    chgPhoto(list01, firstSection);
    chgPhoto(list02, lastSection);

    function chgPhoto(list, section) {
        $(list+" a").click(function(){
            $(".contents1 " + section + " img").attr("src", $(this).attr("href"));
            return false;
        })
    }
});