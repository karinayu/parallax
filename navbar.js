/* const header = document.querySelector("header");
if(window.innerWidth > 768) {
    let isEvent = false;
    window.addEventListener("scroll", function(){
        if (!isEvent) {
            header.classList.toggle("sticky", window.scrollY > 0);
            console.log("вызов");
            isEvent = true;
            this.setTimeout(function() {
                isEvent = false;
            }, 500);
        };
    });
}; */
const header = document.querySelector("header");
if(window.innerWidth > 768) {
    window.addEventListener("scroll", function(){
        header.classList.toggle("sticky", window.scrollY > 0);
    });
};
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
burger.onclick = () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("lock");
}