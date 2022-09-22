$(function(){
	// ハンバーガーメニュー
	$('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
		$('header nav, .btn , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
	})
});