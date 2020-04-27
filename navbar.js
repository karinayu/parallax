window.addEventListener("scroll", function(){
    if(window.innerWidth > 768) {
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
    };
});