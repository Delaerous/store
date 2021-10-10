$(function() {
    // Owl Carousel
    
    let owl = $(".owl-carousel");
    if (owl) {
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
        responsive:{
          0:{
              items:1,
          },
          600:{
              items:3,
          },
          1000:{
              items:5,
          }
      }
        
      });
    }

    let brandList = $(".brands__carousel");
    if (brandList) {
      brandList.owlCarousel({
        items: 5,
        center: true,
        margin: 10,
        loop: true,
        nav: true,
        navText: [
          '<div class="carousel__prev" aria-hidden="true">Prev</div>',
          '<div class="carousel__next" aria-hidden="true">Next</div>'
      ],
        dots: false,
        responsive:{
          0:{
              items:1,
          },
          600:{
              items:3,
          },
          1000:{
              items:5,
          }
      }
        
      });
    }

    
})

	