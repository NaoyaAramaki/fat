$(function(){

    // スムーススクロール
    $(".toTop a").click(function(){
        // 一番上へスクロール
        $("html, body").animate({scrollTop: 0}, 500);

        return false;
    })

    // フィルタリング
    $("button").click(function(){
        // フィルタリング条件の取得
        var target = $(this).attr("value");

        $("main li").each(function(){
            $(this).animate({"opacity": 0}, 300, function(){
                // 全て非表示(初期化)
                $(this).hide();

                // フィルタリングの条件を満たしているか確認
                if($(this).children("p.icon").hasClass(target) || target == "all") {
                    // 条件を満たしているものを再表示
                    $(this).show();
                    $(this).animate({"opacity": 1}, 300);
                }
            });
        });
    });

    // 作業状況を示すアイコン表示制御部
    // workを増やした場合、下記変数も増やしていくこと。
    var work14, work13, work12, work11,
        work10, work09, work08, work07, work06,
        work05, work04, work03, work02, work01;
    
    var icon14, icon13, icon12, icon11,
        icon10, icon09, icon08, icon07, icon06,
        icon05, icon04, icon03, icon02, icon01;

    var works = [
                    work14, work13, work12, work11,
                    work10, work09, work08, work07, work06, 
                    work05, work04, work03, work02, work01
                ]

    var icons = [
                    icon14, icon13, icon12, icon11,
                    icon10, icon09, icon08, icon07, icon06,
                    icon05, icon04, icon03, icon02, icon01  
                ]

    $("main li p.icon").each(function(i){
        works[i] = $(this).attr("class").split(" ");
    })

    for(i=0; i < works.length; i++) {
        icons[i] = "";
        for(j=0; j < works[i].length; j++) {
            switch(works[i][j]) {
                case "pc":
                    icons[i] = icons[i] + "\\f109";
                    break;
                case "tablet":
                    icons[i] = icons[i] + "\\f3fa";
                    break;
                case "sp":
                    icons[i] = icons[i] + "\\f3cf";
                    break;
                case "html":
                    icons[i] = icons[i] + "\\f1c9";
                    break;
                case "js":
                    icons[i] = icons[i] + "\\4a";
                    break;
                case "design":
                    icons[i] = icons[i] + "\\f53f";
                    break;
                case "sub_page":
                    icons[i] = icons[i] + "S";
                    break;
                case "completion":
                    icons[i] = icons[i] + "\\f00c";
                    break;
            }
        }
        $("head").append("<style>main li:nth-of-type(" + Number(i+1) + ") p.icon::before {content:'" + icons[i] + "';}</style>");
    }

});