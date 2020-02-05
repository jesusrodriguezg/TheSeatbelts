$(function(){
	$('video').on('ended',function(){
		$(".logo").fadeIn();
		$(".overlay").css("display","flex").fadeIn();
	});
});