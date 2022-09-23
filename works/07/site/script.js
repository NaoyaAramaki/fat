// 作成者：荒牧直矢
// 作成日：2022/09/17
// 最終更新日：2022/09/17
$(function(){
	// スムーススクロール
	// smoothクラスが付与されているaタグのみ実行する。
	$("a" + ".smooth").click(function(){
		var target = $($(this).attr("href")).offset().top;
		// ヘッダー固定部(PC版を基準)の高さ分減らす。
		target -= 110;

		$("html, body").animate({scrollTop: target}, 500);
		return false;
	})
});