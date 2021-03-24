const header = document.querySelector("header");
if (window.innerWidth > 768) {
    window.addEventListener("scroll", function () {
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
(function () {
    'use strict';

    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back_to_top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    var goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();