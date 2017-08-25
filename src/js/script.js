$(function () {
	videoHover();
});

function videoHover() {

	var video = $(".video");
	var opcoes = $(".opcoes");
	var doc = $(document.documentElement);

	video.mouseover(function() {
		opcoes.removeClass("hover-inativo");
	});

	video.mouseout(function() {
		opcoes.addClass("hover-inativo");
	});

}
