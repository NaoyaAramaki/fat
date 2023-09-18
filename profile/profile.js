$(function(){
    $("button").click(function(){
        // フィルタリング条件の取得
        var target = $(this).attr("value");

        if (target == "all") {
            if($("dl .edu").css("display") == "none") {
                $("dl .edu").fadeIn();
            }
            if($("dl .work").css("display") == "none") {
                $("dl .work").fadeIn();
            }
        } else if (target == "edu") {
            if($("dl .edu").css("display") == "none") {
                $("dl .edu").fadeIn();
            }
            $("dl .work").fadeOut();
        } else if (target == "work") {
            if($("dl .work").css("display") == "none") {
                $("dl .work").fadeIn();
            }
            $("dl .edu").fadeOut();
        }
    
    });
});