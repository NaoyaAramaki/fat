$(function(){
    var browserWidth;

    window.addEventListener('resize', function(){
        browserWidth = window.innerWidth;
        if(browserWidth < 769) {
        } else {
        }
    });
    $(window).on("load", function(){
        $(".c-toTop").addClass("is-hidden");
    })
    // グローバルナビゲーション　消失・復活切り替え
    var beforePos = 0;
    var topPos = $("body").offset().top;

    var headerPc = ".l-header--notScroll";
    var headerPcScroll = ".l-header--scroll";
    var headerLogoSp = ".l-header__logo--notScroll"
    var headerNavSp = ".l-header-nav--notScroll";

    function headerScroll(scroll) {
        if(browserWidth > 768) {
            if(topPos == scroll) {
                $(headerPc).addClass("is-show");
                $(headerPc).removeClass("is-hidden");
                $(headerPcScroll).removeClass("is-show");
                $(headerPcScroll).addClass("is-hidden");
            }else if (0 > scroll - beforePos) {
                $(headerPc).removeClass("is-show");
                $(headerPc).addClass("is-hidden");
                $(headerPcScroll).removeClass("is-hidden");
                $(headerPcScroll).addClass("is-show");
            } else {
                $(headerPc).addClass("is-hidden");
                $(headerPcScroll).addClass("is-hidden");
            }
        } else {
            if(topPos == scroll) {
                $(headerPc).addClass("is-show");
                $(headerLogoSp).removeClass("is-hidden");
                $(headerNavSp).removeClass("is-show");
            } else if(0 > scroll - beforePos) {
                $(headerPc).removeClass("is-hidden");
                $(headerPc).addClass("is-show");
                $(headerNavSp).addClass("is-show");
            } else {
                $(headerPc).removeClass("is-show");
                $(headerPc).addClass("is-hidden");
                $(headerLogoSp).addClass("is-hidden");
            }
        }
        
        beforePos = scroll;
    }


    // toTopボタン制御

    function toTopScroll(scroll) {
        if(topPos == scroll){
            $(".c-toTop").removeClass("is-show");
        } else if(scroll > 500) {
            $(".c-toTop").addClass("is-show");
            $(".c-toTop").removeClass("is-hidden");
        } else {
            $(".c-toTop").removeClass("is-show");
            $(".c-toTop").addClass("is-hidden");
        }
    }

    function getScroll(scroll) {
        return scroll;
    }

    var getSc;

    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        headerScroll(scroll);
        toTopScroll(scroll);
        getSc = getScroll(scroll);
    })

    window.onload = () => {
        var url;
        url = location.pathname;
        const apply = document.querySelector(".p-apply");
        const chgPoint = document.querySelector(".l-footer");
        const options = {
            root: null,
            rootMargin: 0 + "px",
            threshold: 0,
        }
        if(url == "/index.html") {
            const observer = new IntersectionObserver(chgBgColor, options);
            observer.observe(chgPoint);
            function chgBgColor(entries) {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        apply.classList.add("chgBgColor");
                    } else {
                        apply.classList.remove("chgBgColor");
                    }
                })
            }
        }
    }
    






    // ハンバーガーメニュー(開閉時、スクロールあり)
    // $(".l-header-nav__button").click(function(){
    //     if(!($(this).hasClass("is-open"))) {
    //         $(this).addClass("is-open");
    //         $(".l-header-nav, .l-header__logo, .l-header-nav__left, .l-header-nav__right").addClass("is-open");
    //         $(".l-kv, .l-main, .l-footer").addClass("is-close");

    //         // スクロール位置を保存
    //         scroll = getSc;
    //     } else {
    //         $(this).removeClass("is-open");
    //         $(".l-header-nav, .l-header__logo, .l-header-nav__left, .l-header-nav__right").removeClass("is-open");
    //         $(".l-kv, .l-main, .l-footer").removeClass("is-close");
    //         $(window).scrollTop(scroll);
    //         console.log(scroll);
    //     }

    //     return false;
    // })


    // ハンバーガーメニュー(開閉時、スクロールなし)
    $(".l-header-nav__button").click(function(){
        if(!($(this).hasClass("is-open"))) {
            $(this).addClass("is-open");
            $(".l-header-nav, .l-header__logo, .l-header-nav__left, .l-header-nav__right").addClass("is-open");
            $(".l-main").addClass("is-close");
            $("body").css("overflow", "hidden");
        } else {
            $(this).removeClass("is-open");
            $(".l-header-nav, .l-header__logo, .l-header-nav__left, .l-header-nav__right").removeClass("is-open");
            $(".l-main").removeClass("is-close");
            $("body").css("overflow", "visible");
        }

        return false;
    })


    // トグルメニュー
    var toggleList = function() {
        var findList = $(this).next(".p-footer-aboveTheMiddle__list");
        $(findList).toggleClass("is-open");
        $(this).toggleClass("close");
    }
    var toggleList01 = $(".p-footer-aboveTheMiddle__heading.u-use--sp");
    var toggleList02 = $(".p-footer-aboveTheMiddle__heading:last-of-type");
    toggleList01.click(toggleList);
    toggleList02.click(toggleList);
});