const menu = document.getElementById("main-menu");
const sticky = menu.offsetTop;
const header = document.getElementById("header");
window.onscroll = function() {menuFixed();};
function menuFixed() {
    if (window.pageYOffset >= sticky) {
        menu.classList.add("sticky-menu");
      } else {
        menu.classList.remove("sticky-menu");
      }
    
}

function scrollTop() {
    menu.addEventListener("click",(event)=>{
        if (menu.classList.contains("sticky-menu")) {
            header.scrollIntoView();
        } 
    });
}
