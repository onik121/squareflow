

// navbar 
document.addEventListener("DOMContentLoaded", function () {
    const navTrigger = document.querySelector('.navTrigger');
    const mainListDiv = document.getElementById('mainListDiv');
    const barsIcon = navTrigger.querySelector('.fa-bars');
    const timesIcon = navTrigger.querySelector('.fa-times');

    navTrigger.addEventListener('click', function () {
        navTrigger.classList.toggle('active');
        mainListDiv.classList.toggle('show_list');
        barsIcon.style.display = barsIcon.style.display === 'none' ? 'block' : 'none';
        timesIcon.style.display = timesIcon.style.display === 'none' ? 'block' : 'none';
    });

});
window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.nav').classList.add('affix');
    } else {
        document.querySelector('.nav').classList.remove('affix');
    }
});





// Hero Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

setInterval(() => {
    changeSlide(1);
}, 4000);

showSlide(slideIndex);




// // specials cars
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".icon i");

const scrollCarousel = (direction) => {
    carousel.scrollLeft += direction === "left" ? -firstCardWidth : firstCardWidth;
};

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => scrollCarousel(btn.id));
});



// // customers reviews
const slider = document.querySelector(".Slider-div");
const carouselDiv = document.querySelector(".carousel-div");
const firstBoxWidth = carouselDiv.querySelector(".Card").offsetWidth;
const arrow = document.querySelectorAll(".Wrapper i");

const scrollCarouselDiv = (direction) => {
    carouselDiv.scrollLeft += direction === "Left" ? -firstBoxWidth : firstBoxWidth;
};

arrow.forEach(btn => {
    btn.addEventListener("click", () => scrollCarouselDiv(btn.id));
});
