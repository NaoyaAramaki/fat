// 作成者：荒牧直矢
// 作成日：2022/09/29
// 最終更新日：2022/09/30
$(function(){
    var img01 = "../../img/gray.png";
    var img02 = "../../img/green.png";
    var img03 = "../../img/blue.png";
    var img04 = "../../img/white.png";
    var img05 = "../../img/skyblue.png";
    var images = [img01, img02, img03, img04, img05];
    var cnt = 0;
    var interval = 3000;
    var duration = 3000;
    var timer = setInterval(slideTimer, interval);
    
    function slideTimer() {
        $(".main_visual ul").animate(duration,
        function(){
            $(this).append($(".main_visual li:first-of-type"));
            $(".main_visual figure img").attr("src", images[cnt]);
            cnt = ++cnt;
            if(cnt > 4) {
                cnt = 0;
            }
        });
    }

    $("body, .bg_belt").ripples({
        dropRadius: 10, //波紋の大きさ
        resolution: 600, //波紋の広がり速度
        perturbance: 0.001 //波紋のブレ
    })

    $(".main_visual ul a").click(function(){
        $(this).attr("href");
        $(".main_visual figure img").attr("src", $(this).attr("href"));
        return false;
    })

    $(".fadeIn").on("inview", function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("is-show");
      } else {
        $(this).stop().removeClass("is-show");
      }
    });
});