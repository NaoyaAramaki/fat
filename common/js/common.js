$(function(){
	// ハンバーガーメニュー
	$('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
		$('nav, .btn , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
	})
});