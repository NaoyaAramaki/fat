// 作成者：荒牧直矢
// 作成日：2022/10/02
// 最終更新日：2022/10/15

$(function(){
    var choice1 = "choice1";
    var choice2 = "choice2";
    var choice3 = "choice3";
    var choice4 = "choice4";
    $(window).on("load", function(){
        $(".choice2, .choice3").css("display", "none");
    });

    $("#choice1 a, #choice2 a, #choice3 a, #choice4 a").click(function(){
        $(".choice1, .choice2, .choice3").css("display", "none");
        
        switch($(this).text()) {
            case choice1:
                $(".choice1, .choice2, .choice3").css("display", "none");
                $(".choice1").css("display", "block");
                break;
            case choice2:
                $(".choice1, .choice2, .choice3").css("display", "none");
                $(".choice2").css("display", "block");
                break;
            case choice3:
                $(".choice1, .choice2, .choice3").css("display", "none");
                $(".choice3").css("display", "block");
                break;
            case choice4:
                $(".choice1, .choice2, .choice3").css("display", "none");
                break;
        }

        return false;
    });
});