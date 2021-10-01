$(document).ready(function(){
	$('.product-slider ul').bxSlider({
		pagerCustom: '.product-slider__pager ul',
		controls: false,  
		auto: false,
		minSlides: 1,
		maxSlides: 1,
		slideWidth: 200
	});
});