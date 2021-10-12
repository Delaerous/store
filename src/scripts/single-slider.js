$(document).ready(function(){
	if ($(".product-slider").length){
		$('.product-slider ul').bxSlider({
			pagerCustom: '.product-slider__pager ul',
			controls: false,  
			auto: false,
				
			maxSlides: 1,
			slideWidth: 200
		});
}
});