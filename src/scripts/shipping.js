const shippingTitle = document.getElementById("shipping");
const shippingForm = document.getElementById("shipping-form");



if (shippingTitle) {
    shippingTitle.addEventListener("click",(event)=>{
        event.target = event.preventDefault();
        shippingForm.classList.toggle("form-open");
        shippingTitle.classList.toggle("active-link");
       
    }
);}


