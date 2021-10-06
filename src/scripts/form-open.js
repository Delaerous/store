const loginBtn = document.getElementById("login");
const loginForm = document.querySelector(".login-form");
const couponBtn = document.getElementById("coupon");
const couponForm = document.getElementById("coupon-form");

function openForm() {
    
    
    couponForm.classList.toggle("form-open--block");
}


if (loginBtn && couponBtn ) {
    loginBtn.addEventListener("click",(event)=>{
        event.target = event.preventDefault();
        loginForm.classList.toggle("form-open--block");

    });
    couponBtn.addEventListener("click",(event)=>{
        event.target = event.preventDefault();
        couponForm.classList.toggle("form-open--block");

    });

}


