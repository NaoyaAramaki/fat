$(function(){
    $("form").validate({
        rules: {
            category: {
                required: true
            },
            client_name: {
                required: [true, "ご担当者様のお名前"]
            },
            client_kana: {
                required: [true, "フリガナ"]
            },
            tel: {
                required: [true, "電話番号 (半角)"],
                digits: [true, "電話番号 (半角)"],
            },
            email: {
                required: [true, "メールアドレス"],
                email: true
            },
            re_email: {
                required: [true, "メールアドレス (確認)"],
                email: true,
                equalTo: "#email",
            },
            contact_means: {
                required: true
            },
            inquiry_details: {
                required: [true, "お問い合わせ内容"]
            },
            agreed: {
                required: true
            },
        },
        messages: {
            category: {
                required: "お問い合わせ種別を選択してください。"
            },
            contact_means: {
                required: "連絡方法を選択してください。"
            },
            agreed: {
                required: "個人情報の取り扱いについて、同意をお願い致します。"
            }
        },
        // エラーメッセージ出力箇所
        errorPlacement: function(error, element){
            var name = element.attr('name');
            error.appendTo($('.is_error'));
        },
        errorElement: "p",
    });
});