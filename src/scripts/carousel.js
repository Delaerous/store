$(function() {
    // Owl Carousel
    let owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 10,
      loop: true,
      nav: true,
      dots: false,
    });
	$('.carousel').bxSlider({
		pager: false,
		controls: true,
		minSlides: 5,
		maxSlides: 5,
		slideMargin: 20,        
		slideWidth: 236
	});
  });