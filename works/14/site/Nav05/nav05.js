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
        $("#choice1 a, #choice2 a, #choice3 a, #choice4 a").removeClass("current");
        
        switch($(this).text()) {
            case choice1:
                $(".choice1").css("display", "block");
                $(this).addClass("current");
                break;
            case choice2:
                $(".choice2").css("display", "block");
                $(this).addClass("current");
                break;
            case choice3:
                $(".choice3").css("display", "block");
                $(this).addClass("current");
                break;
            case choice4:
                $(this).addClass("current");
                break;
        }

        return false;
    });

    $("form").validate({
        rules: {
            name: {
                required: [true, "お名前", "入力"],
            },
            kana: {
                required: [true, "フリガナ", "入力"],
            },
            email: {
                required: [true, "メールアドレス", "入力"],
                email: true,

            },
            re_email: {
                required: [true, "メールアドレス(確認)", "入力"],
                email: true,
                equalTo: "#email",
            },
            tel: {
                required: [true, "電話番号", "入力"],
            },
            option6: {
                required: [true, "項目06", "選択"],
            },
            zip: {
                required: [true, "郵便番号", "入力"],
            },
            prefecture:  {
                required: [true, "都道府県", "選択"],
            },
            city: {
                required: [true, "市区町村", "入力"],
            },
            address1: {
                required: [true, "丁目・番地・号", "入力"],
            },
            option8: {
                required: [true, "項目08", "選択"],
            },
            option9: {
                required: [true, "項目09", "選択"],
            },
            option10: {
                required: [true, "項目10", "選択"],
            },
            option1101: {
                required: [true, "項目11-01", "選択"],
            },
            consent: {
                required: true,
            },
        },
        messages: {
            consent: {
                required: "個人情報の取り扱いについて同意をお願い致します。",
            }
        },
        errorPlacement: function(error, element) {
            var name = element.attr("name");
            error.appendTo($(".is_error"));
        },
        errorElement: "p",
    });
});