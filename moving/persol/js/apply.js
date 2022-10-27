// フォームバリデーション

window.onload = function() {
    const btnSubmit = document.getElementById("btnSubmit");
    const inputFamilyName = document.getElementById("familyName");
    const inputFirstName = document.getElementById("firstName");
    const nameBox = document.getElementById("nameBox");
    const inputFamilyKana = document.getElementById("familyKana");
    const inputFirstKana = document.getElementById("firstKana");
    const kanaBox = document.getElementById("kanaBox");
    const inputEmail = document.getElementById("email");
    const inputTel = document.getElementById("tel");
    const inputSession = document.getElementById("session");
    // const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;

    console.log(document.getElementById(""));
    btnSubmit.addEventListener("click", function(e){
        e.preventDefault();

        if(inputFamilyName.value == "" || inputFirstName.value == "") {
            if(!(inputFamilyName.classList.contains("is-error"))) {
                nameBox.insertAdjacentHTML("beforeend", '<p id="name-error" class="p-form__error">※必須入力です</p>');
                inputFamilyName.classList.add("is-error");
                inputFirstName.classList.add("is-error");
            }
        } else {
            if(document.getElementById("name-error")) {
                document.getElementById("name-error").remove();
            }
            nameBox.classList.remove("is-error");
            inputFamilyName.classList.remove("is-error");
            inputFirstName.classList.remove("is-error");
        }

        if(inputFamilyKana.value == "" || inputFirstKana.value == "") {
            if(!(inputFamilyKana.classList.contains("is-error"))) {
                kanaBox.insertAdjacentHTML("beforeend", '<p id="kana-error" class="p-form__error">※必須入力です</p>');
                inputFamilyKana.classList.add("is-error");
                inputFirstKana.classList.add("is-error");
            }
        } else {
            if(document.getElementById("kana-error")) {
                document.getElementById("kana-error").remove();
            }
            kanaBox.classList.remove("is-error");
            inputFamilyKana.classList.remove("is-error");
            inputFirstKana.classList.remove("is-error");
        }

        var parentEmail = inputEmail.parentElement;

        if(inputEmail.value == "") {
            if(!(inputEmail.classList.contains("is-error"))){
                parentEmail.insertAdjacentHTML("beforeend", '<p id="email-error" class="p-form__error">※メールアドレスをご確認ください</p>');
                inputEmail.classList.add("is-error");
            }
        } else {
            if(document.getElementById("email-error")) {
                document.getElementById("email-error").remove();
            }
            parentEmail.classList.remove("is-error");
            inputEmail.classList.remove("is-error");
        }

        var parentTel = inputTel.parentElement;

        if(inputTel.value == "") {
            if(!(inputTel.classList.contains("is-error"))) {
                parentTel.insertAdjacentHTML("beforeend", '<p id="tel-error" class="p-form__error u-mb25--sp">※必須入力です</p>');
                inputTel.classList.add("is-error");
                parentTel.classList.add("is-error");
            }
        } else {
            if(document.getElementById("tel-error")) {
                document.getElementById("tel-error").remove();
            }
            parentTel.classList.remove("is-error");
            inputTel.classList.remove("is-error");
        }

        if(inputSession.value == "") {
            if(!(inputSession.classList.contains("is-error"))) {
                inputSession.parentElement.insertAdjacentHTML("beforeend", '<p id="session-error" class="p-form__error">※必須入力です</p>');
                inputSession.classList.add("is-error");
            }
        } else {
            if(document.getElementById("session-error")) {
                document.getElementById("session-error").remove();
            }
            inputSession.parentElement.classList.remove("is-error");
            inputSession.classList.remove("is-error");
        }

        return;
    });
}

$(function(){
    $(window).on("load", function(){
        $(".c-toTop").addClass("is-hidden");
    })
    
    var topPos = $("body").offset().top;
    
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        toTopScroll(scroll);
    })

    function toTopScroll(scroll) {
        if(topPos == scroll){
            $(".c-toTop").removeClass("is-show");
        } else if(scroll > 300) {
            $(".c-toTop").addClass("is-show");
            $(".c-toTop").removeClass("is-hidden");
        } else {
            $(".c-toTop").removeClass("is-show");
            $(".c-toTop").addClass("is-hidden");
        }
    }
});