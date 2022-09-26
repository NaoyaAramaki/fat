// 作成者：荒牧直矢
// 作成日：2022/09/22
// 最終更新日：2022/09/26
$(function(){
	// ハンバーガーメニュー
	$('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
		$('nav ul, .btn , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
	})
});