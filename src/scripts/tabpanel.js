const tab = document.querySelectorAll(".tabpanel__tab");
let reviews = document.getElementById("Reviews");
let description = document.getElementById("Description");
let reviewsContent = document.getElementById("reviews-content");
let descriptionContent = document.getElementById("description-content");
if (description) {
  description.addEventListener('click', openDescription);
  reviews.addEventListener('click', openReviews);
}

function openDescription() {
    
    
      if (!this.classList.contains('tabpanel__tab--active')){
        this.classList.add('tabpanel__tab--active');
        reviews.classList.remove('tabpanel__tab--active');
        descriptionContent.classList.add('enabled');
        reviewsContent.classList.remove('enabled');
      }
    }
  

  
  
  function openReviews() {
      if (!this.classList.contains('tabpanel__tab--active')){
        this.classList.add('tabpanel__tab--active');
        description.classList.remove('tabpanel__tab--active');
        reviewsContent.classList.add('enabled');
        descriptionContent.classList.remove('enabled');
      }
    }
  