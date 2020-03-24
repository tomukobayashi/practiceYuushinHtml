$(document).ready(function(){
	$('.slider').bxSlider({
		auto: true,
		pagerCustom: '.custom-thumb',
		controls: true,
		pager:true
	});
});

//トップページアクセス時にロゴ表示
$(function() {
  setTimeout(function(){
    $('.start p').fadeIn(1600);
  },500); //0.5秒後にロゴをフェードイン
  setTimeout(function(){
    $('.start').fadeOut(500);
  },2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト
});

function modalfnc(no) {
	var id = `js-popup${no}`;
	var popup = document.getElementById(id);
	if(!popup) return;
	popup.classList.toggle('is-show');
}