(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: JA (Japanese; 日本語)
 */
$.extend( $.validator.messages, {
	// required: "このフィールドは必須です。",
    required: "{1}を「入力」してください。<br>",
	remote: "このフィールドを修正してください。<br>",
	email: "有効なメールアドレスを入力してください。<br>",
	url: "有効なURLを入力してください。<br>",
	date: "有効な日付を入力してください。<br>",
	dateISO: "有効な日付（ISO）を入力してください。<br>",
	number: "有効な数字を入力してください。<br>",
	digits: "数字のみを入力してください。<br>",
	creditcard: "有効なクレジットカード番号を入力してください。<br>",
	equalTo: "メールアドレスが一致致しません。<br>",
	extension: "有効な拡張子を含む値を入力してください。<br>",
	maxlength: $.validator.format( "{0} 文字以内で入力してください。<br>" ),
	minlength: $.validator.format( "{0} 文字以上で入力してください。<br>" ),
	rangelength: $.validator.format( "{0} 文字から {1} 文字までの値を入力してください。<br>" ),
	range: $.validator.format( "{0} から {1} までの値を入力してください。<br>" ),
	step: $.validator.format( "{0} の倍数を入力してください。<br>" ),
	max: $.validator.format( "{0} 以下の値を入力してください。<br>" ),
	min: $.validator.format( "{0} 以上の値を入力してください。<br>" )
} );
return $;
}));