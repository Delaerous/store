const slyder = $('.slider__list').bxSlider({
  pager: true,	
  controls: false,   
  auto: true,
  pause: 10000,
  minSlides: 1,
  maxSlides: 1
   
  });
  
  $(".arrow-left").click(e =>{
    e.preventDefault();
  
    slyder.goToPrevSlide();
  
  });
  
  $(".arrow-right").click(e =>{
  
    e.preventDefault();
  
    slyder.goToNextSlide();
  })

 