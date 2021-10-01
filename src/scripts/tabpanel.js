const tab = document.querySelectorAll(".tabpanel__tab");
let reviews = document.getElementById("Reviews");
let description = document.getElementById("Description");
let reviewsContent = document.getElementById("reviews-content");
let descriptionContent = document.getElementById("description-content");


function openDescription() {
    
    description .addEventListener('click', function (e) {
      e.preventDefault();
      if (!this.classList.contains('tabpanel__tab--active')){
        this.classList.add('tabpanel__tab--active');
        reviews.classList.remove('tabpanel__tab--active');
        descriptionContent.classList.add('enabled');
        reviewsContent.classList.remove('enabled');
      }
    });
  }

  openDescription();
  function openReviews() {
    
    reviews.addEventListener('click', function (e) {
      e.preventDefault();
      if (!this.classList.contains('tabpanel__tab--active')){
        this.classList.add('tabpanel__tab--active');
        description.classList.remove('tabpanel__tab--active');
        reviewsContent.classList.add('enabled');
        descriptionContent.classList.remove('enabled');
      }
    });
  }

  openReviews();