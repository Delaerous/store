$(function() {
    // Owl Carousel
    let owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 5,
      margin: 10,
      loop: true,
      nav: true,
      navText: [
        '<div class="carousel__prev" aria-hidden="true">Prev</div>',
        '<div class="carousel__next" aria-hidden="true">Next</div>'
    ],
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