let burger = document.querySelector(".burger");
let menuMain = document.querySelector(".main-menu__list");
let body = document.getElementsByTagName('body')[0];
burger.addEventListener("click", (e) => {
    burger.classList.toggle("activebrgr");
    menuMain.classList.toggle("menu-open");
    body.classList.toggle("noScroll");

    
});
