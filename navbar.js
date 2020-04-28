window.addEventListener("scroll", function(){
    if(window.innerWidth > 768) {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    };
});
let burger = document.querySelector(".burger");
let nav = document.querySelector("nav");
let body = document.querySelector("body");
burger.onclick = () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("lock");
}